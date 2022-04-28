import * as React from "react";
import HeroDescription from "./HeroDescription";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <section className="px-4 py-5 md:flex md:justify-between lg:items-center md:px-10 xl:px-32 lg:py-10">
      <HeroDescription />
      <HeroImg />
    </section>
  );
};

export default Hero;

