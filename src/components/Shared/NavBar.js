import { Link } from "gatsby";
import * as React from "react";

const NavBar = () => {
  return (
    <nav className="lg:flex lg:justify-between">
      <a className="font-bold tracking-widest text-zinc-700" href="/">
        GODWIN
      </a>
      <ul className="hidden xl:flex">
        <Li text="ABOUT" link="#about" />
        <Li text="PROJECTS" link="#projects" />
        <Li text="CONTACT" link="#contact" />
      </ul>
    </nav>
  );
};

export default NavBar;

const Li = ({ text, className, link }) => {
  return (
    <li className={`text-zinc-600 ml-8 text-sm ${className}`}>
      <Link to={link}>{text}</Link>
    </li>
  );
};

