import * as React from "react";
import { Link } from "gatsby";
import Social from "../Shared/Social";

const Footer = () => {
  return (
    <footer
      className="
    bg-light-blue-2 text-zinc-900 text-center grid place-items-center py-10
    lg:flex lg:justify-between lg:items-center lg:px-10 xl:px-32"
    >
      <div className="mb-3 tracking-wider lg:mb-0">
        <Link to="#header">Godwin Opara</Link>
      </div>
      <div className="mb-6 lg:flex lg:mb-0">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="lg:ml-5">Design and built by Godwin Opara</p>
      </div>
      <Social />
    </footer>
  );
};

export default Footer;

