import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = ({ icon, className }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} className={`text-white text-3xl mr-8 last:mr-0 ${className}`} />
    </>
  );
};

export default Icons;

