import * as React from "react";
import ProfileImg from "./ProfileImg";
import AboutDescription from "./AboutDescription";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 py-12 min-h-screen bg-zinc-900 xl:px-32 xl:flex xl:items-center xl:justify-between"
    >
      <AboutDescription />
      <ProfileImg />
    </section>
  );
};

export default About;

