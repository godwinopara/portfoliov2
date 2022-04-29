import * as React from "react";
import HeroDescription from "./HeroDescription";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <section className="px-4 py-5 md:flex md:justify-between md:px-10 lg:items-center xl:px-32 ">
      <HeroDescription />
      <HeroImg />
    </section>
  );
};

export default Hero;

