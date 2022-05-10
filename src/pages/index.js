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
        <link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png" />
        <meta name="icon" href="../images/apple-touch-icon.png" />
        <meta name="icon" href="../images/favicon-16x16.png" />
        <meta name="icon" href="../images/favicon-32x32.png" />

        <link rel="manifest" href="../images/site.webmanifest" />
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

