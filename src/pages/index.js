import * as React from "react";
import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Hero from "../components/Hero/Hero";

const index = () => {
  return (
    <>
      <header className="py-5 px-10" id="header">
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

