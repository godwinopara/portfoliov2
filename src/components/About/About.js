import * as React from "react";
import ProfileImg from "./ProfileImg";
import AboutDescription from "./AboutDescription";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-900 px-32 flex items-center justify-between"
    >
      <AboutDescription />
      <ProfileImg />
    </section>
  );
};

export default About;

