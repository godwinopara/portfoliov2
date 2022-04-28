import * as React from "react";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactDescription from "./ContactDescription";
import Social from "../Shared/Social";

const Contact = () => {
  return (
    <section className="xl:px-32 py-20 bg-zinc-900 xl:grid xl:grid-cols-2" id="contact">
      <div>
        <ContactHeading />
        <ContactDescription />
        <Social />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;

