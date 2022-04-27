import { Link } from "gatsby";
import * as React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <section className="bg-light-blue-2 flex justify-between items-center text-zinc-900 px-32 py-10">
      <div className="logo">
        <Link to="#header">Godwin Opara</Link>
      </div>
      <div className="flex">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="ml-5">Design and built by Godwin Opara</p>
      </div>
      <Social />
    </section>
  );
};

export default Footer;

