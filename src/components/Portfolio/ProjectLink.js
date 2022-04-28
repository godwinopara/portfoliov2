import * as React from "react";

const ProjectLink = ({ href, image, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-white inline-flex items-center rounded-sm text-zinc-900 text-center px-6 py-2  mt-3 text-sm last:ml-8"
    >
      {text}
      <img src={image} alt="project link images" className="w-3 mb-1 max-w-full ml-2" />
    </a>
  );
};

export default ProjectLink;

