import * as React from "react";
import { Link } from "gatsby";
import Social from "../Shared/Social";

const Footer = () => {
  return (
    <section
      className="
    bg-light-blue-2 text-zinc-900 text-center grid place-items-center py-10
    xl:flex xl:justify-between xl:items-center xl:px-32"
    >
      <div className="sm:mb-3 xl:mb-0">
        <Link to="#header">Godwin Opara</Link>
      </div>
      <div className="sm:mb-5 xl:flex xl:mb-0">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="ml-5">Design and built by Godwin Opara</p>
      </div>
      <Social />
    </section>
  );
};

export default Footer;

