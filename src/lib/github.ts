export type GHUser = {
  public_repos: number;
  followers: number;
  following: number;
};

export type GHRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

export type GitHubStats = {
  user: GHUser;
  totalStars: number;
  topLanguages: { name: string; count: number; pct: number }[];
  topRepos: GHRepo[];
};

const GITHUB_USER = "Ichie235";

function ghHeaders(): HeadersInit {
  const h: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    (h as Record<string, string>).Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return h;
}

async function ghFetch<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    next: { revalidate: 3600 },
    headers: ghHeaders(),
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  try {
    const [user, repos] = await Promise.all([
      ghFetch<GHUser>(`/users/${GITHUB_USER}`),
      ghFetch<GHRepo[]>(
        `/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`
      ),
    ]);

    const ownRepos = repos.filter((r) => !r.fork);
    const totalStars = ownRepos.reduce((s, r) => s + r.stargazers_count, 0);

    // language distribution by repo count
    const langCount: Record<string, number> = {};
    for (const r of ownRepos) {
      if (r.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1;
    }
    const totalLangRepos = Object.values(langCount).reduce((a, b) => a + b, 0);
    const topLanguages = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        count,
        pct: Math.round((count / totalLangRepos) * 100),
      }));

    const topRepos = [...ownRepos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    return { user, totalStars, topLanguages, topRepos };
  } catch (err) {
    console.error("[github]", err);
    return null;
  }
}
