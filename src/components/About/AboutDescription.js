import * as React from "react";
import AboutHeading from "./AboutHeading";
import AboutText from "./AboutText";
import AboutBtn from "./AboutBtn";
import Languages from "./Languages";

const AboutDescription = () => {
  return (
    <div className="w-2/4">
      <AboutHeading />
      <AboutText />
      <AboutBtn />
      <Languages />
    </div>
  );
};

export default AboutDescription;

