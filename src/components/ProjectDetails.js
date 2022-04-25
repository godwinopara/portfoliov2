import React from "react";
import ArrowLink from "../images/arrow-up-right-from-square-solid.svg";
import GithubLink from "../images/github-brands.svg";
import ProjectLink from "./ProjectLink";
import ListText from "./ListText";

const ProjectDetails = (props) => {
  const { heading, text, image, className, techstacks } = props;
  return (
    <div
      className={`flex items-center justify-between rounded-xl shadow-md p-10  mb-36 bg-zinc-900 ${className}`}
    >
      <div className="w-2/4 text-white">
        <h2 className="text-4xl font-bold my-5 text-light-blue-1">{heading}</h2>
        <p>{text}</p>
        <ListText textLists={techstacks} />
        <div>
          <ProjectLink href="#" image={ArrowLink} text="Visit" />
          <ProjectLink href="#" image={GithubLink} text="Github" />
        </div>
      </div>

      <div>{image}</div>
    </div>
  );
};

export default ProjectDetails;

