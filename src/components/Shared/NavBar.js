import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import HamburgerIcon from "../../images/icon-hamburger.svg";
import HamburgerClose from "../../images/icon-close.svg";

const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) {
      document.documentElement.style.overflowY = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [navIsOpen]);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <nav className="flex justify-between items-center">
      <a className="font-bold tracking-widest text-zinc-700" href="/">
        GODWIN
      </a>
      <ul
        className={`
        ${navIsOpen ? "block" : "hidden"} 
        fixed top-0 left-0 h-60 w-full bg-zinc-900 flex items-center justify-center flex-col
        md:static md:right-0 md:bg-transparent md:h-full md:w-2/5 md:flex-row md:flex md:justify-between
        `}
      >
        <Li text="ABOUT" link="#about" onClick={handleClick} onKeyPress={handleClick} />
        <Li text="PROJECTS" link="#projects" onClick={handleClick} onKeyPress={handleClick} />
        <Li text="CONTACT" link="#contact" onClick={handleClick} onKeyPress={handleClick} />
      </ul>

      {/* HAMBURGER MENU */}
      <div
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
        className="md:hidden z-10"
      >
        {!navIsOpen && <img src={HamburgerIcon} alt="hamburger menu" />}
        {navIsOpen && <img src={HamburgerClose} alt="hamburger menu" className="z-20" />}
      </div>
    </nav>
  );
};

export default NavBar;

const Li = ({ text, className, link, onClick, onKeyPress }) => {
  return (
    <li
      className={`text-white text-md mb-5 hover:text-light-blue-1 md:text-zinc-600 md:mb-0 md:ml-8 md:text-xs ${className}`}
    >
      <Link onClick={onClick} onKeyPress={onKeyPress} role="button" to={link}>
        {text}
      </Link>
    </li>
  );
};

