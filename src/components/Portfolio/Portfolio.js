import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ProjectDetails from "./ProjectDetails";

const Portfolio = () => {
  return (
    <section className="px-32 pt-32 min-h-screen bg-white" id="projects">
      <div className="px-8">
        <ProjectDetails
          heading="Designo"
          text="This project required me to build a 7 pages website to the design provided"
          image={<StaticImage src="../../images/fuji.jpg" height={400} className="rounded-lg" />}
          techstacks={["React", "Gatsby", "MDX markdown", "Styled Components"]}
          demoLink="https://designo-site.netlify.app/"
          githubLink="https://github.com/godwinopara/designo-site"
        />
        <ProjectDetails
          heading="Audiophille"
          text=" An audio Ecommerce website where users can Add items to cart,choose method of payment
              on checkout and it also include authentication for user details"
          image={<StaticImage src="../../images/lamp.jpg" height={400} className="rounded-lg" />}
          className="flex-row-reverse"
          techstacks={["React", "Formik", "Yup", "TailwindCSS"]}
          demoLink="https://audiophile-e-commerce.netlify.app/"
          githubLink="https://github.com/godwinopara/audiophille-ecommerce"
        />
        <ProjectDetails
          heading="Dev Finder"
          text="A web app for searching for developers on github. view their repo, 
          view their personal website and their github details."
          image={<StaticImage src="../../images/fuji.jpg" height={400} className="rounded-lg" />}
          techstacks={["React", "Axios", "SASS"]}
          demoLink="https://findgithubdev.netlify.app/"
          githubLink="https://github.com/godwinopara/devFinder"
        />
        <ProjectDetails
          heading="Starbuck"
          text="A Clone of Starbuck homepage, menupage, rewards page, giftcard page and login page."
          image={<StaticImage src="../../images/lamp.jpg" height={400} className="rounded-lg" />}
          className="flex-row-reverse"
          techstacks={["React", "Sass"]}
          demoLink="https://starbuck-clone.netlify.app/"
          githubLink="https://github.com/godwinopara/starbuck-clone"
        />
      </div>
    </section>
  );
};

export default Portfolio;

