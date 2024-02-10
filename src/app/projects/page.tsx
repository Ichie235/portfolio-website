import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps, project } from "../../../library/projects/_project";

export const metadata: Metadata = {
  title: "Chinemerem Ichie | Projects",
  // metadataBase: new URL(""),
  description:
    "This is the page where you get to see the projects i have done 😉",
};

export default async function Project() {
  return (
    <main className="flex flex-col gap-14 max-w-7xl mx-auto md:px-12 px-5">
      <div className="flex flex-col gap-7 mt-[3.5rem] md:mt-[7rem] max-w-2xl">
        <h1 className="font-taruno text-2xl sm:text-4xl lg:leading-[3.5rem]">
          Projects
        </h1>
        <p className="font-varuna text-based leading-relaxed">
          Hello and welcome to my projects page! Here you&apos;ll find a curated
          selection of projects that I&apos;ve worked on, showcasing my skills,
          creativity, and passion for innovation. Each project represents a
          unique journey, from conceptualization to execution. Feel free to make contributions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 xl:grid-cols-3 ">
        {project.map((item, index) => (
          <Link
            key={index}
            href={`/projects/${item.slug}`}
            className="flex items-center gap-x-4 bg-[#fafafa] dark:bg-lighter-tr-black  border border-transparent px-4 py-2 rounded-lg"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="dark:bg-[#474444] bg-[#ede9e9] rounded-md p-3 transition duration-300 ease-in-out transform hover:scale-105"
              style={{ color: "transparent" }}
            />

            <div>
              <h2 className="text-base tracking-wide mb-1 font-semibold">
                {item.name}
              </h2>
              <div className="text-sm dark:text-white text-[#5e5f69]">
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const revalidate = 10;
