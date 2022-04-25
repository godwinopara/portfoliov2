import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ProjectDetails from "../ProjectDetails";

const Portfolio = () => {
  return (
    <section className="px-32 pt-32 min-h-screen bg-white">
      <div className="px-8">
        <ProjectDetails
          heading="Designo"
          text="This project required me to build a 7 pages website to the design provided"
          image={<StaticImage src="../../images/fuji.jpg" height={400} className="rounded-lg" />}
          techstacks={["React", "Gatsby", "MDX markdown", "Styled Components"]}
        />
        <ProjectDetails
          heading="Audiophille"
          text=" An audio Ecommerce website where users can Add items to cart,choose method of payment
              on checkout and it also include authentication for user details"
          image={<StaticImage src="../../images/lamp.jpg" height={400} className="rounded-lg" />}
          className="flex-row-reverse"
          techstacks={["React", "Formik", "Yup", "TailwindCSS"]}
        />
        <ProjectDetails
          heading="Dev Finder"
          text="A web app for searching for developers on github. view their repo, 
          view their personal website and their github details."
          image={<StaticImage src="../../images/fuji.jpg" height={400} className="rounded-lg" />}
          techstacks={["React", "Axios", "SASS"]}
        />
        <ProjectDetails
          heading="Starbuck"
          text="A Clone of Starbuck homepage, menupage, rewards page, giftcard page and login page."
          image={<StaticImage src="../../images/lamp.jpg" height={400} className="rounded-lg" />}
          className="flex-row-reverse"
          techstacks={["React", "Sass"]}
        />
      </div>
    </section>
  );
};

export default Portfolio;

