import * as React from "react";
import ProjectDescription from "./ProjectDescription";

const ProjectDetails = (props) => {
  const { heading, text, image, className, techstacks, demoLink, githubLink } = props;
  return (
    <div
      className={`flex items-center justify-between rounded-xl shadow-md p-10  mb-36 bg-zinc-900 ${className}`}
    >
      {/* PROJECT DESCRIPTION */}
      <ProjectDescription
        heading={heading}
        text={text}
        techstacks={techstacks}
        demoLink={demoLink}
        githubLink={githubLink}
      />

      {/* PROJECT IMAGE */}
      <div>{image}</div>
    </div>
  );
};

export default ProjectDetails;

