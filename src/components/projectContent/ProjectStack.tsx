"use client";
import {
  blogData,
  linksData,
} from "../../../library/projects/blogProject/_blogData";
import Link from "next/link";

type ProjectStackProps = {
  projectName: string;
};

const ProjectStack: React.FC<ProjectStackProps> = ({ projectName }) => {
  if (projectName === "blog-wesite") {
    const blogItem = blogData.find((item) => item.id === "1");
    if (blogItem) {
      const entries = Object.entries(blogItem);
      const startingIndex = Math.max(0, entries.length - 4);
      return (
        <>
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold">
            Key Features:
          </h1>
          {entries.slice(startingIndex).map(([key, value]) => (
            <>
              <ul
                className="list-disc mt-5 ml-5 text-[#3f3f46] dark:text-white text-base md:px-4 md:text-lg "
                key={key}
              >
                <li>
                  {" "}
                  <strong className="font-bold">{key}</strong>: {value}
                </li>
              </ul>
            </>
          ))}
          <h1 className="font-varuna text-lg md:text-2xl text-[#3f3f46] dark:text-white lg:leading-[3.5rem] font-bold mt-5">
            Technologies:
          </h1>
          <ul className="list-disc mt-5 ml-5 text-[#3f3f46] gap-9 flex flex-col dark:text-white text-base md:px-4 md:text-lg ">
            {linksData.map((link, index) => (
              <li key={index}>
                {" "}
                <Link
                  href={link.href}
                  target="_blank"
                  className="font-semibold text-red dark:text-green"
                >
                  {link.text}
                </Link>
                : {link.description}
              </li>
            ))}
          </ul>
        </>
      );
    }
  } else if (projectName === "Next-JcS") {
    return (
      <>
        <ul className="list-disc mt-5 ml-5 text-[#3f3f46]  dark:text-white text-lg font-varuna">
          <li className="">Nextjs: UI Framework</li>
          <li className="">Tailwind CSS: A utility-first CSS framework</li>
          <li className="">Vercel: Hosting and Deployment</li>
          <li className="">Google Maps: Property Location and Markers</li>
          <li className="">Leaflet: Property Location and Markers</li>
          <li className="">Nodejs: Backend</li>
          <li className="">PlanetScale: Database</li>
          <li className="">Amazon S3 Buckets: Image Storage</li>
          <li className="">Cloudinary: Image Optimization</li>
        </ul>
        <h1 className="mt-5 font-varuna text-[#3f3f46] dark:text-white text-lg md:text-3xl lg:leading-[3.5rem] font-bold">
          Features and Functionality
        </h1>
      </>
    );
  } else if (projectName === "Next-JS") {
    return (
      <>
        <ul className="list-disc mt-5 ml-5 text-[#3f3f46] dark:text-white text-lg font-varuna">
          <li className="">Nextjs: UI Framework</li>
          <li className="">Tailwind CSS: A utility-first CSS framework</li>
          <li className="">Vercel: Hosting and Deployment</li>
          <li className="">Google Maps: Property Location and Markers</li>
          <li className="">Leaflet: Property Location and Markers</li>
          <li className="">Nodejs: Backend</li>
        </ul>
        <h1 className="mt-5 font-varuna text-[#3f3f46] dark:text-white text-3xl lg:leading-[3.5rem] font-bold">
          Features and Functionality
        </h1>
      </>
    );
  } else {
    return <li className="">hello world</li>;
  }
};

export default ProjectStack;
