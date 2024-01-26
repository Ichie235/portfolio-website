"use client";
type ProjectStackProps = {
  projectName: string;
};
const ProjectStack: React.FC<ProjectStackProps> = ({ projectName }) => {
  if (projectName === "Next-jjS") {
    return (
      <>
        <ul className="list-disc mt-5 ml-5 text-[#3f3f46] text-lg font-varuna">
          <li className="">Static Generator: VitePress</li>
          <li className="">Custom Styles: CSS</li>
          <li className="">Hosting: Vercelll</li>
        </ul>
        <h1 className="mt-5 font-varuna text-[#3f3f46] dark:text-white text-3xl lg:leading-[3.5rem] font-bold">
          Features and Functionality
        </h1>
      </>
    );
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
        <h1 className="mt-5 font-varuna text-[#3f3f46] text-3xl lg:leading-[3.5rem] font-bold">
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
