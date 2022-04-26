import { Link } from "gatsby";
import * as React from "react";

const Footer = () => {
  return (
    <section>
      <div className="logo">
        <Link to="#header">Godwin Opara</Link>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()}</p>
        <p>Design and built by Godwin Opara</p>
      </div>
      <div className="social"></div>
    </section>
  );
};

export default Footer;

