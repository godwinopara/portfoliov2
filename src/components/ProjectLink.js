import * as React from "react";

const ProjectLink = ({ href, image, text }) => {
  return (
    <a
      href={href}
      className="bg-zinc-900 inline-flex items-center text-white text-center px-6 py-2 mr-8 mt-10 text-lg"
    >
      {text}
      <img src={image} alt="" className="w-4 max-w-full ml-2" />
    </a>
  );
};

export default ProjectLink;

