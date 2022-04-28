import * as React from "react";
import HeroDescription from "./HeroDescription";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <section className="hero flex justify-between items-center px-32 py-10">
      <HeroDescription />
      <HeroImg />
    </section>
  );
};

export default Hero;

