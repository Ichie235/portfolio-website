import { notFound } from "next/navigation";
import { getAllMDXPosts, getMDXPost, compileMDXToHTML } from "@/lib/blog-mdx";
import { buildPageMetadata } from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllMDXPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getMDXPost(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: `${post.title} | Chinemerem Ichie`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getMDXPost(slug);
  if (!post) notFound();

  const html = await compileMDXToHTML(post.content);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="w-full px-6 md:px-16 lg:px-20 xl:px-36 pt-12 pb-24 md:pt-20 overflow-x-hidden">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-varuna text-sm text-tr-black dark:text-tr-white hover:text-red dark:hover:text-green transition-colors mb-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" aria-hidden>
          <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
        </svg>
        All posts
      </Link>

      {/* Header */}
      <header className="max-w-3xl mb-10">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-varuna text-[10px] uppercase tracking-widest border border-tr-black dark:border-tr-white text-tr-black dark:text-tr-white rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-taruno text-3xl md:text-5xl font-semibold leading-tight mb-4 text-black dark:text-white">
          {post.title}
        </h1>
        <p className="font-varuna text-tr-black dark:text-tr-white text-base mb-6">
          {post.description}
        </p>
        <div className="flex items-center gap-4 font-varuna text-sm text-tr-black dark:text-tr-white border-t border-tr-black/30 dark:border-tr-white/30 pt-4">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* MDX content */}
      <article
        className="max-w-3xl prose-custom"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
