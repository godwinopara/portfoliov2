import React from "react";
import ArrowLink from "../images/arrow-up-right-from-square-solid.svg";
import GithubLink from "../images/github-brands.svg";
import ProjectLink from "./ProjectLink";

const ProjectDetails = ({ heading, text, image, className, demo, github }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-xl shadow-md p-10  mb-36 bg-white ${className}`}
    >
      <div className="w-2/4">
        <h2 className="text-4xl font-bold my-5">{heading}</h2>
        <p>{text}</p>
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

