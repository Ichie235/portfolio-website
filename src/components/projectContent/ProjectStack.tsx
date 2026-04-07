import Link from "next/link";
import { projectContentBySlug } from "../../../library/projects/_projectContent";
import type { ProjectSlug } from "../../../library/projects/_project";

type ProjectStackProps = {
  projectName: ProjectSlug;
};

const ProjectStack: React.FC<ProjectStackProps> = ({ projectName }) => {
  const projectContent = projectContentBySlug[projectName];

  if (!projectContent) {
    return <p>Content not found</p>;
  }

  return (
    <>
      <h2 className="text-section font-varuna text-lg font-bold md:text-2xl lg:leading-[3.5rem]">
        Key Features:
      </h2>
      <ul className="text-section mt-5 ml-5 list-disc md:px-4 md:text-lg">
        {projectContent.features.map((feature) => (
          <li key={feature.title} className="mt-5 text-base">
            <strong className="font-bold">{feature.title}</strong>:{" "}
            {feature.description}
          </li>
        ))}
      </ul>
      <h2 className="text-section mt-5 font-varuna text-lg font-bold md:text-2xl lg:leading-[3.5rem]">
        Technologies:
      </h2>
      <ul className="text-section mt-5 ml-5 flex list-disc flex-col gap-9 md:px-4 md:text-lg">
        {projectContent.technologies.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
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
};

export default ProjectStack;
