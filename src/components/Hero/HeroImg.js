import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroImg = () => {
  return (
    <div className="hidden md:block">
      <StaticImage alt="hero design image" src="./images/image-hero.png" width={350} />
    </div>
  );
};

export default HeroImg;

