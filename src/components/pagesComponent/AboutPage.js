import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../Button";
import { faReact, faJs, faHtml5, faCss3, faPython } from "@fortawesome/free-brands-svg-icons";
import Span from "../Span";
import Icons from "../Icons";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="
          relative min-h-screen bg-zinc-900 px-32 flex items-center justify-between
          before:content-[''] before:absolute top-0 left-0 before:bg-[url('../images/css-logo.svg')]
          bg-no-repeat
          "
    >
      <div className="w-2/4">
        <div className="mb-5">
          <h2 className="text-white text-4xl font-bold tracking-widest+ ">About Me.</h2>
          <span className="text-yellow-plum">Interactive Front-End Developer</span>
        </div>

        <p className="text-white mb-5">
          Hello my name is Godwin Opara and i enjoy <Span text="creating" /> things that live on the
          internet I love to create smart user interface and <Span text="imagine" /> useful
          interaction, developing rich web experience and <Span text="web application" />
        </p>
        <p className="text-white">
          whether on the internet or outdoors, i love <Span text="exploring" />, and i apply this
          open mindset to my projects. I am happiest when i am using my <Span text="passion" /> to
          help you pursue yours!.
        </p>

        <div className="mt-5">
          <Button text="Contact" className="border border-white" />
          <Button text="Resume" className="border border-white" />
        </div>

        <div className="mt-8">
          <Icons icon={faPython} className="text-python" />
          <Icons icon={faJs} className="text-javascript" />
          <Icons icon={faReact} className="text-react" />
          <Icons icon={faHtml5} className="text-html5" />
          <Icons icon={faCss3} className="text-css" />
        </div>
      </div>
      <div className="">
        <StaticImage src="../../images/portfolio-image.png" />
      </div>
    </section>
  );
};

export default AboutPage;

