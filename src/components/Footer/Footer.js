import { Link } from "gatsby";
import * as React from "react";
import Social from "../Shared/Social";

const Footer = () => {
  return (
    <section
      className="
    bg-light-blue-2 text-zinc-900 text-center grid place-items-center
    xl:flex jxl:ustify-between xl:items-center xl:px-32 py-10"
    >
      <div className="logo mb-3">
        <Link to="#header">Godwin Opara</Link>
      </div>
      <div className="mb-5 xl:flex ">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="ml-5">Design and built by Godwin Opara</p>
      </div>
      <Social />
    </section>
  );
};

export default Footer;

