import * as React from "react";
import HeroDescription from "./HeroDescription";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <section className="px-4 py-5 xl:flex xl:justify-between xl:items-center xl:px-32 xl:py-10">
      <HeroDescription />
      <HeroImg />
    </section>
  );
};

export default Hero;

