import * as React from "react";
import Span from "../Shared/Span";

const AboutText = () => {
  return (
    <>
      <p className="text-white mb-5">
        Hello my name is Godwin Opara and i enjoy <Span text="creating" /> things that live on the
        internet I love to create smart user interface and <Span text="imagine" /> useful
        interaction, developing rich web experience and <Span text="web application" />
      </p>
      <p className="text-white">
        whether on the internet or outdoors, i love <Span text="exploring" />, and i apply this open
        mindset to my projects. I am happiest when i am using my <Span text="passion" /> to help you
        pursue yours!.
      </p>
    </>
  );
};

export default AboutText;

