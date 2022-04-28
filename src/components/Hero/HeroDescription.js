import * as React from "react";
import Span from "../Shared/Span";
import Heading from "./Heading";
import Heading2 from "./Heading2";
import HeroPara from "./HeroPara";
import HeroBtn from "./HeroBtn";

const HeroDescription = () => {
  return (
    <div className="md:w-3/4">
      <Span text="Hello world, my name is" />
      <Heading />
      <Heading2 />
      <HeroPara />
      <HeroBtn />
    </div>
  );
};

export default HeroDescription;

