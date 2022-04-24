import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import AboutPage from "../components/pagesComponent/AboutPage";
import Portfolio from "../components/pagesComponent/Portfolio";

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

        {/* About Page Section */}
        <AboutPage />
        {/* End About Page Section */}

        {/* PORTFOLIO PAGE SECTION */}
        <Portfolio />

        {/* END PORTFOLIO PAGE SECTION */}

        <section id="projects"></section>
        <section id="contact"></section>
      </main>
    </>
  );
};

export default index;

