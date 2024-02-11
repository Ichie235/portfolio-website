"use client";
import { blogData } from "../../../library/projects/blogProject/_blogData";

type ProjectOverviewProps = {
  projectName: string;
};
const ProjectOverview: React.FC<ProjectOverviewProps> = ({ projectName }) => {
  if (projectName === "blog-wesite") {
    const blogItem = blogData.find((item) => item.id === "1");
    if (blogItem) {
      return (
        <>
          <p className="text-base md:text-lg md:px-4 ">{blogItem.paragraph1}</p>
        </>
      );
    } else {
      return <p>No blog data found.</p>;
    }
  } else if (projectName === "Next-JcS") {
    return (
      <>
        <p>
          Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ep Lorem ipsum dolor sit ame Lorem ep Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit ame
        </p>
        <p>
          Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ep Lorem ipsum dolor sit ame Lorem ep Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit ame
        </p>
      </>
    );
  } else if (projectName === "Next-JS") {
    return (
      <>
        <p>
          Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ep Lorem ipsum dolor sit ame Lorem ep Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit ame
        </p>
        <p>
          Lorem ep Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ep Lorem ipsum dolor sit ame Lorem ep Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ep Lorem ipsum dolor sit ame
        </p>
      </>
    );
  } else {
    return <li className="">hello world</li>;
  }
};

export default ProjectOverview;
