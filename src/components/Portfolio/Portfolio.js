import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ProjectDetails from "./ProjectDetails";

const Portfolio = () => {
  return (
    <section className="xl:px-32 py-32 min-h-screen bg-zinc-900" id="projects">
      <h2 className="font-bold text-light-blue-1 mb-12 text-center text-3xl px-2 lg:text-left xl:text-4xl">
        Some Things i'v Built
      </h2>
      <div>
        <ProjectDetails
          heading="Designo"
          text="This project required me to build a 7 pages website to the design provided"
          image={
            <StaticImage src="../../images/fuji.jpg" alt="" height={400} className="rounded-lg" />
          }
          techstacks={["React", "Gatsby", "Markdown", "Styled Components"]}
          demoLink="https://designo-site.netlify.app/"
          githubLink="https://github.com/godwinopara/designo-site"
        />
        <ProjectDetails
          heading="Audiophille"
          text=" An audio Ecommerce website where users can Add items to cart,choose method of payment
              on checkout and it also include authentication for user details"
          image={
            <StaticImage src="../../images/lamp.jpg" alt="" height={400} className="rounded-lg" />
          }
          className="flex-row-reverse"
          techstacks={["React", "Formik", "Yup", "TailwindCSS"]}
          demoLink="https://audiophile-e-commerce.netlify.app/"
          githubLink="https://github.com/godwinopara/audiophille-ecommerce"
          className="lg:flex-row-reverse"
        />
        <ProjectDetails
          heading="Dev Finder"
          text="A web app for searching for developers on github. view their repo, 
          view their personal website and their github details."
          image={
            <StaticImage src="../../images/fuji.jpg" alt="" height={400} className="rounded-lg" />
          }
          techstacks={["React", "Axios", "SASS"]}
          demoLink="https://findgithubdev.netlify.app/"
          githubLink="https://github.com/godwinopara/devFinder"
        />
        <ProjectDetails
          heading="Starbuck"
          text="A Clone of Starbuck homepage, menupage, rewards page, giftcard page and login page."
          image={
            <StaticImage src="../../images/lamp.jpg" alt="" height={400} className="rounded-lg" />
          }
          className="flex-row-reverse"
          techstacks={["React", "Sass"]}
          demoLink="https://starbuck-clone.netlify.app/"
          githubLink="https://github.com/godwinopara/starbuck-clone"
          className="lg:flex-row-reverse"
        />
      </div>
    </section>
  );
};

export default Portfolio;

