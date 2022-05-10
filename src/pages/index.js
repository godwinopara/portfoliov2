import * as React from "react";
import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Hero from "../components/Hero/Hero";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Godwin Opara | Front-End Developer</title>
      </Helmet>
      <header className="px-4 py-5 md:px-10 xl:px-32" id="header">
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default index;

