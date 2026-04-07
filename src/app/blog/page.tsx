import { Metadata } from "next";
import Explore from "../../../SVG/Explore";
import Image from "next/image";
import { blogPost } from "../../../library/blogPost/_blogPost";
import Link from "next/link";
import Clock from "../../../SVG/Clock";
import Calender from "../../../SVG/Calender";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Chinemerem Ichie | Blog",
  description:
    "Articles by Chinemerem Ichie about software engineering, lessons learned, and projects he has built.",
  path: "/blog",
});

export default function Blog() {
  return (
    <main className="w-full px-6 md:px-12 overflow-x-hidden lg:px-20 xl:px-36 pt-3 pb-4 md:py-4 ">
      <section className=" mt-[2rem] md:mt-[4rem]">
        <h1 className="max-w-3xl font-taruno font-semibold tracking-tight text-3xl  md:text-5xl mb-6 md:leading-[3.7rem]">
          My Blog
        </h1>
        <p className="text-muted mb-10 max-w-2xl text-base leading-relaxed md:text-lg">
          Welcome to my blog where I share personal stories about things I have
          learned, projects I have worked on and so on.
        </p>
        <div className="flex items-center gap-x-2 mb-8">
          <Explore />
          <h2 className="text-xl font-varuna font-semibold tracking-tight">
            Explore
          </h2>
        </div>
      </section>
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
                  width={100}
                  height={100}
                  className=" mt-6 w-[85%] h-[224px] md:mt-0 md:w-[400px] md:h-[400px] lg:w-[554.4px] lg:h-[254.4px] transition duration-300 ease-in-out transform hover:scale-105"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-muted">
                  {item.description}
                </p>
                <p className="text-muted flex items-center gap-4">
                  <span className="flex gap-2 items-center">
                    <Calender />
                    {item.date}
                  </span>{" "}
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
    </main>
  );
}
