import type { Metadata } from "next";
import Link from "next/link";
import {
  project,
  ProjectProps,
  ProjectSlug,
} from "../../../../library/projects/_project";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectStack from "@/components/projectContent/ProjectStack";
import ProjectOverview from "@/components/projectContent/ProjectOverview";
import { buildPageMetadata } from "@/lib/site";

type Params = {
  params: {
    projectId: ProjectSlug;
  };
};

export function generateMetadata({
  params: { projectId },
}: Params): Metadata {
  const projectDetails = project.find((item) => item.slug === projectId);

  if (!projectDetails) {
    return buildPageMetadata({
      title: "Project Not Found | Chinemerem Ichie",
      description: "The requested project could not be found.",
      path: `/projects/${projectId}`,
    });
  }

  return buildPageMetadata({
    title: `${projectDetails.name} | Chinemerem Ichie`,
    description: projectDetails.description,
    path: `/projects/${projectDetails.slug}`,
    image: projectDetails.image,
  });
}

const ProjectDetails = ({ params: { projectId } }: Params) => {
  const projectDetails: ProjectProps | undefined = project.find(
    (p) => p.slug === projectId
  );

  if (!projectDetails) {
    // Handle case when project is not found
    return notFound();
  }

  return (
    <main className=" max-w-7xl h-auto mx-auto px-4 md:px-12 lg:px-16">
      <div className="flex flex-row justify-between md:justify-around  mt-[3rem] md:mt-[7rem] px-3">
        <h1 className="font-taruno text-base sm:text-2xl lg:leading-[3.5rem]">
          {projectDetails.name}
        </h1>
        <Link
          href={projectDetails.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg dark:bg-lighter-tr-black dark:text-white bg-tr-white hover:bg-white text-black font-light"
        >
          Explore
        </Link>
      </div>
      <div className="flex flex-col items-center my-8">
        {" "}
        <Image
          src={projectDetails.image}
          alt="Project Icons"
          width={285}
          height={36}
          priority
          className="rounded-lg md:w-[75%] lg:w-[750px] md:h-[350px] w-[90%] shadow-lg bg-cover"
        />
      </div>
      <div className=" px-5 md:px-28 lg:px-44 mt-10 mb-10">
        <h2 className=" font-varuna text-[#3f3f46] dark:text-white text-lg md:text-3xl lg:leading-[3.5rem] font-bold">
          Overview
        </h2>
        <ProjectOverview projectName={projectDetails.slug} />
      </div>
      <div className="mt-5 px-5 md:px-28 lg:px-44">
        <ProjectStack projectName={projectDetails.slug} />
      </div>
    </main>
  );
};

export default ProjectDetails;
