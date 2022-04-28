import * as React from "react";
import ProjectHeading from "./ProjectHeading";
import ListText from "../Shared/ListText";
import ProjectLink from "./ProjectLink";
import ArrowLink from "../../images/arrow-up-right-from-square-solid.svg";
import GithubLink from "../../images/github-brands.svg";

const ProjectDescription = ({ text, heading, demoLink, githubLink, techstacks }) => {
  return (
    <div className="w-2/4 text-white">
      <ProjectHeading heading={heading} />
      <p>{text}</p>

      {/* LIST TECH STACK */}
      <ListText textLists={techstacks} />
      <div>
        {/* LINK TO WEBSITE */}
        <ProjectLink href={demoLink} image={ArrowLink} text="Visit" />
        {/* LINK TO GITHUB */}
        <ProjectLink href={githubLink} image={GithubLink} text="Github" />
      </div>
    </div>
  );
};

export default ProjectDescription;
