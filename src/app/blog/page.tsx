import { Metadata } from "next";
import Explore from "@/icons/Explore";
import Image from "next/image";
import { blogPost } from "@/content/blog/posts";
import { getAllMDXPosts } from "@/lib/blog-mdx";
import Link from "next/link";
import Clock from "@/icons/Clock";
import Calender from "@/icons/Calender";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Chinemerem Ichie | Blog",
  description:
    "Articles by Chinemerem Ichie about software engineering, lessons learned, and projects he has built.",
  path: "/blog",
});

export default function Blog() {
  const internalPosts = getAllMDXPosts();

  return (
    <main className="w-full px-6 md:px-12 overflow-x-hidden lg:px-20 xl:px-36 pt-3 pb-4 md:py-4">
      <section className="mt-[2rem] md:mt-[4rem]">
        <h1 className="max-w-3xl font-taruno font-semibold tracking-tight text-3xl md:text-5xl mb-6 md:leading-[3.7rem]">
          My Blog
        </h1>
        <p className="text-muted mb-10 max-w-2xl text-base leading-relaxed md:text-lg">
          Welcome to my blog where I share personal stories about things I have
          learned, projects I have worked on and so on.
        </p>
      </section>

      {/* Internal MDX posts */}
      {internalPosts.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center gap-x-2 mb-6">
            <Explore />
            <h2 className="text-xl font-varuna font-semibold tracking-tight">
              Published Here
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {internalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 rounded-lg border border-tr-black dark:border-tr-white p-5 surface-panel hover:border-red dark:hover:border-green transition-colors"
              >
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-varuna text-[10px] uppercase tracking-widest border border-tr-black dark:border-tr-white text-tr-black dark:text-tr-white rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="font-taruno text-base font-semibold text-black dark:text-white group-hover:text-red dark:group-hover:text-green transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="font-varuna text-sm text-tr-black dark:text-tr-white line-clamp-2 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 font-varuna text-xs text-tr-black dark:text-tr-white mt-auto pt-3 border-t border-tr-black/20 dark:border-tr-white/20">
                  <span className="flex gap-1.5 items-center">
                    <Calender />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex gap-1.5 items-center">
                    <Clock />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* External Medium posts */}
      <section>
        <div className="flex items-center gap-x-2 mb-6">
          <Explore />
          <h2 className="text-xl font-varuna font-semibold tracking-tight">
            On Medium
          </h2>
        </div>
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {blogPost.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="surface-panel card border border-tr-white shadow-xl md:h-72 lg:card-side lg:h-64">
                <figure>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
                    sizes="(min-width: 1024px) 554px, (min-width: 768px) 400px, 85vw"
                    className="mt-6 w-[85%] h-[224px] md:mt-0 md:w-[400px] md:h-[400px] lg:w-[554.4px] lg:h-[254.4px] transition duration-300 ease-in-out transform hover:scale-105"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="text-muted">{item.description}</p>
                  <p className="text-muted flex items-center gap-4">
                    <span className="flex gap-2 items-center">
                      <Calender />
                      {item.date}
                    </span>
                    <span className="flex gap-2 items-center">
                      <Clock />
                      {item.readTime}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
