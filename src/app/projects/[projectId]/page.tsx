"use client";
import Link from "next/link";
import { project, ProjectProps } from "../../../../library/_project";
import me from "@/assets/images/me.png";
import Image from "next/image";

import { notFound } from "next/navigation";

type Params = {
  params: {
    projectId: string;
  };
};

const ProjectDetails = ({ params: { projectId } }: Params) => {
  const projectDetails: ProjectProps | undefined = project.find(
    (p) => p.id === projectId
  );

  if (!projectDetails) {
    // Handle case when project is not found
    return notFound();
  }

  return (
    <main className=" max-w-7xl h-auto mx-auto px-8 md:px-12 lg:px-16">
      <div className="flex flex-row justify-between md:justify-around  mt-[7rem] px-3">
        <h1 className="font-taruno text-base sm:text-4xl lg:leading-[3.5rem]">
          {projectDetails.name}
        </h1>
        <Link
          href="#"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg dark:bg-lighter-tr-black dark:text-white bg-tr-white hover:bg-white text-black font-light"
        >
          Explore
        </Link>
      </div>
      <div className="flex flex-col items-center my-8">
        {" "}
        <Image
          src={me}
          alt="Project Icons"
          width={246}
          height={36}
          className="rounded-lg max-w-[750px] max-h-[400px] min-w-[246px] min-h-[36]"
        />
      </div>
      <div className=" px-5 md:px-28 lg:px-44">
        <h1 className=" font-varuna text-base sm:text-4xl lg:leading-[3.5rem] font-bold">
          Overview
        </h1>
        <p>{projectDetails.overview}</p>
      </div>
      <div className="mt-5 px-5 md:px-28 lg:px-44">
        <h1 className=" font-varuna text-base sm:text-4xl lg:leading-[3.5rem] font-bold">
          Stack/Technology
        </h1>
       <ul><li>{projectDetails.stack.css}</li></ul>
      </div>
    </main>
  );
};

export default ProjectDetails;
