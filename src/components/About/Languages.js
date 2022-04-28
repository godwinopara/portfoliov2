import * as React from "react";
import Icons from "../Shared/Icons";
import { faReact, faJs, faHtml5, faCss3, faPython } from "@fortawesome/free-brands-svg-icons";

const Languages = () => {
  return (
    <div className="mb-10 mt-8 lg:mb-0">
      <Icons icon={faPython} className="text-python" />
      <Icons icon={faJs} className="text-javascript" />
      <Icons icon={faReact} className="text-react" />
      <Icons icon={faHtml5} className="text-html5" />
      <Icons icon={faCss3} className="text-css" />
    </div>
  );
};

export default Languages;

