import * as React from "react";
import ProjectDescription from "./ProjectDescription";

const ProjectDetails = (props) => {
  const { heading, text, image, className, techstacks, demoLink, githubLink } = props;
  return (
    <div
      className={`
      flex flex-col-reverse items-center py-8 px-2 mb-28 shadow-sm shadow-light-blue-2 
      lg:flex-row lg:justify-between lg:rounded-xl  lg:p-10  xl:px-8   bg-zinc-900 ${className}`}
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

