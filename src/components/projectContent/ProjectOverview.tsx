import { projectContentBySlug } from "../../../library/projects/_projectContent";

type ProjectOverviewProps = {
  projectName: string;
};
const ProjectOverview: React.FC<ProjectOverviewProps> = ({ projectName }) => {
  const projectContent = projectContentBySlug[projectName];

  if (!projectContent) {
    return <p className="md:px-4">Overview not found</p>;
  }

  return (
    <>
      {projectContent.overview.map((paragraph) => (
        <p key={paragraph} className="text-base md:px-4 md:text-lg">
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default ProjectOverview;
