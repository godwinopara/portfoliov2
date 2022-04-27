import React from "react";
import Icons from "./Icons";

const SocialLink = ({ href, icon, className }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mr-5">
      <Icons icon={icon} className={`text-white ${className}`} />
    </a>
  );
};

export default SocialLink;

