import * as React from "react";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactDescription from "./ContactDescription";
import Social from "../Shared/Social";

const Contact = () => {
  return (
    <section
      className=" py-20 px-4 bg-zinc-900 lg:grid lg:grid-cols-2 lg:px-10 xl:px-32"
      id="contact"
    >
      <div className="mb-20 grid place-items-center">
        <ContactHeading />
        <ContactDescription />
        <Social />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;

