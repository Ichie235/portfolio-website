import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog/posts");

export type MDXPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image?: string;
  tags?: string[];
};

export type MDXPostWithContent = MDXPost & { content: string };

export function getAllMDXPosts(): MDXPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        readTime: data.readTime ?? "5 min read",
        image: data.image,
        tags: data.tags,
      } satisfies MDXPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getMDXPost(slug: string): MDXPostWithContent | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    readTime: data.readTime ?? "5 min read",
    image: data.image,
    tags: data.tags,
    content,
  };
}

export async function compileMDXToHTML(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(result);
}
