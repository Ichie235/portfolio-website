"use client";
import Link from "next/link";
import { project, ProjectProps } from "../../../../library/projects/_project";
import me from "@/assets/images/me.png";
import Image from "next/image";
import { notFound } from "next/navigation";


type Params = {
  params: {
    blogId: string;
  };
};

const BlogDetails = ({ params: { blogId } }: Params) => {
  const projectDetails: ProjectProps | undefined = project.find(
    (p) => p.name === blogId
  );

  if (!projectDetails) {
    // Handle case when project is not found
    return notFound();
  }

  return (
    <main className=" max-w-7xl h-auto mx-auto px-4 md:px-12 lg:px-16">
     
    </main>
  );
};

export default BlogDetails;
