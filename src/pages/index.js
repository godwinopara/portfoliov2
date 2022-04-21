import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const index = () => {
  return (
    <>
      <header className="py-5 px-10">
        <nav className="flex justify-between">
          <a href="/">Godwin Opara</a>
          <ul className="flex">
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contacts</Link>
            </li>
            <button>Resume</button>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero flex justify-between items-center px-32 py-10 ">
          <div className="hero-description">
            <span>Hello world, my name is</span>
            <h1 className="text-6xl tracking-wider font-bold mt-8">Godwin Opara</h1>
            <h2 className="text-4xl font-bold mb-10">I build things for the web</h2>
            <p>
              I'm a Front end developer with a passion
              <br />
              for crafting exceptional and entertaining digital experience.
            </p>
            <div>
              <button className="border rounded bg-zinc-900 px-2 py-1">Contact</button>
              <button className="border rounded px-2 py-1">Resume</button>
            </div>
          </div>
          <div className="hero-image">
            <StaticImage alt="hero design image" src="../images/image-hero.png" width={350} />
          </div>
        </section>

        <section id="about"></section>
        <section id="projects"></section>
        <section id="contact"></section>
      </main>
    </>
  );
};

export default index;

