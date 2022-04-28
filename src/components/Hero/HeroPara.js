import * as React from "react";
import Span from "../Shared/Span";

const HeroPara = () => {
  return (
    <p className="text-zinc-600 md:w-4/5">
      I'm a <Span text="Front end developer" /> with a passion for
      <br />
      crafting exceptional and entertaining digital experience.
    </p>
  );
};

export default HeroPara;

