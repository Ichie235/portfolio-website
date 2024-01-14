"use client";
type ProjectOverviewProps = {
  projectName: string;
};
const ProjectOverview: React.FC<ProjectOverviewProps> = ({ projectName }) => {
  if (projectName === "Next-jjS") {
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
  }  else if (projectName === "Next-JS") {
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
