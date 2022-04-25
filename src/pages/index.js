import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import AboutPage from "../components/pagesComponent/AboutPage";
import Contact from "../components/pagesComponent/Contact";
import Portfolio from "../components/pagesComponent/Portfolio";
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
            <Span text="Hello world, my name is" />
            <h1 className="text-6xl tracking-wider font-bold mt-8">Godwin Opara</h1>
            <h2 className="text-4xl font-bold mb-10">I build things for the web.</h2>
            <p className="text-zinc-600">
              I'm a <Span text="Front end developer" /> with a passion for
              <br />
              crafting exceptional and entertaining digital experience.
            </p>
            <div className="mt-10">
              <Button text="Contact Me" className="btn-dark" />
              <Button text="Resume" className="btn-dark" />
            </div>
          </div>
          <div className="hero-image">
            <StaticImage alt="hero design image" src="../images/image-hero.png" width={350} />
          </div>
        </section>

        {/* ABOUT Section */}
        <AboutPage />
        {/* End ABOUT Section */}

        {/* PORTFOLIO SECTION */}
        <Portfolio />

        {/* END PORTFOLIO SECTION */}

        {/* CONTACT SECTION */}
        <section id="contact"></section>
        <Contact />
        {/* END CONTACT SECTION */}
      </main>
    </>
  );
};

export default index;

