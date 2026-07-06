import { getGitHubStats } from "@/lib/github";
import { StaggerText } from "@/animations/StaggerText";
import GitHubLangBars from "@/components/ui/GitHubLangBars";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572a5",
  "C#": "#178600",
  Java: "#b07219",
  Go: "#00add8",
  Shell: "#89e051",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Ruby: "#701516",
  Rust: "#dea584",
  PHP: "#4f5d95",
  MDX: "#fcb32c",
};
const DEFAULT_COLOR = "#6b7280";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`inline-block ${className}`}
      width="1em"
      height="1em"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      className={`inline-block ${className}`}
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

function ForkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      className={`inline-block ${className}`}
      aria-hidden
    >
      <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 6a4 4 0 0 1 3.874-3.993c.175.5.315 1.015.415 1.545A2 2 0 0 1 8 8v1a4 4 0 0 0 4 4h1a2 2 0 1 0 0-4h-1A2 2 0 0 1 10 7V6a4 4 0 0 1-4-4 4 4 0 1 0-1 7.874V17A4 4 0 0 0 9 21h6a4 4 0 0 0 4-4v-1a2 2 0 1 0-4 0v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z" />
    </svg>
  );
}

export default async function GitHubStats() {
  const stats = await getGitHubStats();
  if (!stats) return null;

  const { user, totalStars, topLanguages, topRepos } = stats;

  const summaryCards = [
    {
      label: "Repositories",
      shortLabel: "Repos",
      value: user.public_repos,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" aria-hidden>
          <path d="M3 3h18v18H3V3Zm2 2v14h14V5H5Zm2 2h10v2H7V7Zm0 4h10v2H7v-2Zm0 4h7v2H7v-2Z" />
        </svg>
      ),
    },
    {
      label: "Total Stars",
      shortLabel: "Stars",
      value: totalStars,
      icon: <StarIcon className="text-xl" />,
    },
    {
      label: "Followers",
      shortLabel: "Followers",
      value: user.followers,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" aria-hidden>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full mt-16 md:mt-24">
      <div className="flex items-center gap-3 mb-10">
        <StaggerText
          text="GitHub Activity"
          once
          className="font-taruno text-2xl md:text-3xl font-semibold"
        />
        <a
          href="https://github.com/Ichie235"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tr-black dark:text-tr-white hover:text-red dark:hover:text-green transition-colors"
          aria-label="View GitHub profile"
        >
          <ArrowUpRight className="text-base" />
        </a>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-2 md:gap-6 mb-12">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="flex flex-col items-center gap-1 rounded-lg border border-tr-black dark:border-tr-white p-3 md:p-6 surface-panel"
          >
            <span className="text-red dark:text-green mb-1">{card.icon}</span>
            <span className="font-taruno text-xl md:text-3xl font-semibold text-black dark:text-white">
              {card.value}
            </span>
            <span className="font-varuna text-[10px] md:text-xs text-tr-black dark:text-tr-white text-center leading-tight">
              <span className="sm:hidden">{card.shortLabel}</span>
              <span className="hidden sm:inline">{card.label}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Top Languages */}
        <div>
          <h3 className="font-taruno text-base font-semibold mb-5 text-black dark:text-white">
            Top Languages
          </h3>
          <GitHubLangBars languages={topLanguages} />
        </div>

        {/* Top Repos */}
        <div>
          <h3 className="font-taruno text-base font-semibold mb-5 text-black dark:text-white">
            Top Repositories
          </h3>
          <ul className="flex flex-col gap-3">
            {topRepos.map((repo) => (
              <li key={repo.name}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-md border border-tr-black dark:border-tr-white p-3 hover:border-red dark:hover:border-green transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-varuna text-sm font-semibold text-black dark:text-white group-hover:text-red dark:group-hover:text-green transition-colors truncate">
                      {repo.name}
                    </p>
                    {repo.description && (
                      <p className="font-varuna text-xs text-tr-black dark:text-tr-white mt-0.5 line-clamp-1">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-2">
                      {repo.language && (
                        <span className="flex items-center gap-1 font-varuna text-[11px] text-tr-black dark:text-tr-white">
                          <span
                            className="inline-block h-2.5 w-2.5 rounded-full shrink-0"
                            style={{
                              backgroundColor:
                                LANG_COLORS[repo.language] ?? DEFAULT_COLOR,
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1 font-varuna text-[11px] text-tr-black dark:text-tr-white">
                        <StarIcon className="text-xs" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 font-varuna text-[11px] text-tr-black dark:text-tr-white">
                        <ForkIcon className="text-xs" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="shrink-0 text-xs text-tr-black dark:text-tr-white mt-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
