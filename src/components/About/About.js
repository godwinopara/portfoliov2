import * as React from "react";
import ProfileImg from "./ProfileImg";
import AboutDescription from "./AboutDescription";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 py-12 min-h-screen bg-zinc-900 lg:px-10 lg:flex lg:items-center lg:justify-between xl:px-32"
    >
      <AboutDescription />
      <ProfileImg />
    </section>
  );
};

export default About;

