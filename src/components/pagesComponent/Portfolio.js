import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ProjectDetails from "../ProjectDetails";

const Portfolio = () => {
  return (
    <section className="p-32 min-h-screen bg-light-blue">
      <div className="px-8">
        <ProjectDetails
          heading="Designo"
          text="This project required me to build a 7 pages website to the design provided"
          image={<StaticImage src="../../images/fuji.jpg" height={400} />}
        />
        <ProjectDetails
          heading="Audiophille"
          text=" An audio Ecommerce website where users can Add items to cart,choose method of payment
              on checkout and it also include authentication for user details"
          image={<StaticImage src="../../images/lamp.jpg" height={400} />}
          className="flex-row-reverse"
        />
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default Portfolio;

