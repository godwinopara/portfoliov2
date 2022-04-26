import React from "react";
import Icons from "./Icons";

const SocialLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mr-5">
      <Icons icon={icon} className="text-white" />
    </a>
  );
};

export default SocialLink;

