import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import Icons from "../components/Icons";
import { faReact, faJs, faHtml5, faCss3, faPython } from "@fortawesome/free-brands-svg-icons";
import Span from "../components/Span";

const index = () => {
  return (
    <>
      <header className="py-5 px-10">
        <NavBar />
      </header>
      <main>
        <section className="hero flex justify-between items-center px-32 py-10">
          <div className="hero-description">
            <span className="text-zinc-600">Hello world, my name is</span>
            <h1 className="text-6xl tracking-wider font-bold mt-8">Godwin Opara</h1>
            <h2 className="text-4xl font-bold mb-10">I build things for the web.</h2>
            <p className="text-zinc-600">
              I'm a Front end developer with a passion for
              <br />
              crafting exceptional and entertaining digital experience.
            </p>
            <div className="mt-10">
              <Button text="Contact" />
              <Button text="Resume" />
            </div>
          </div>
          <div className="hero-image">
            <StaticImage alt="hero design image" src="../images/image-hero.png" width={350} />
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen bg-zinc-900 px-32 flex items-center justify-between"
        >
          <div className="w-2/4">
            <div className="mb-5">
              <h2 className="text-white text-4xl font-bold tracking-widest+ ">About Me.</h2>
              <span className="text-yellow-plum">Interactive Front-End Developer</span>
            </div>

            <p className="text-white mb-5">
              Hello my name is Godwin Opara and i enjoy <Span text="creating" /> things that live on
              the internet I love to create smart user interface and <Span text="imagine" /> useful
              interaction, developing rich web experience and <Span text="web application" />
            </p>
            <p className="text-white">
              whether on the internet or outdoors, i love <Span text="exploring" />, and i apply
              this open mindset to my projects. I am happiest when i am using my{" "}
              <Span text="passion" /> to help you pursue yours!.
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
            <StaticImage src="../images/portfolio-image.png" />
          </div>
        </section>
        <section id="projects"></section>
        <section id="contact"></section>
      </main>
    </>
  );
};

export default index;

