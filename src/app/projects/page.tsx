import { Metadata } from "next";
import Image from "next/image";
import { projectsQuery } from "../../../lib/sanity.query";
import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import { sanityFetch } from "../../../lib/sanity.client";
import { ProjectProps } from "../../../types/Project";


export const metadata: Metadata = {
  title: "Chinemerem Ichie | Projects",
  // metadataBase: new URL(""),
  description:
    "This is the page where you get to see the projects i have done 😉",
};

export default async function Project() {
  const projects: ProjectProps[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return (
    <main className="flex flex-col gap-14 max-w-7xl mx-auto md:px-12 px-5">
      <div className="flex flex-col gap-7 mt-[3.5rem] md:mt-[7rem] max-w-2xl">
        <h1 className="font-taruno text-2xl sm:text-4xl lg:leading-[3.5rem]">
          Projects
        </h1>
        <p className="font-varuna text-based leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="flex items-center gap-x-4 bg-[#fafafa] dark:bg-lighter-tr-black  border border-transparent p-4 rounded-lg"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={100}
                height={100}
                className="dark:bg-[#474444] bg-[#ede9e9] rounded-md p-3 transition duration-300 ease-in-out transform hover:scale-105"
                style={{ color: "transparent" }}
              />
            )}
            <div>
              <h2 className="text-lg tracking-wide mb-1 font-semibold">
                {project.name}
              </h2>
              <div className="text-sm dark:text-white text-[#5e5f69]">
                {project.overview}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const revalidate = 10;
