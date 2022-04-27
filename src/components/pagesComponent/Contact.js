import * as React from "react";
import ContactForm from "../ContactForm";
import Social from "../Social";

const Contact = () => {
  return (
    <section className="px-32 py-20 bg-zinc-900 grid grid-cols-2" id="contact">
      <div>
        <h1 className="font-bold text-6xl py-5 text-light-blue-1">Let Work together!</h1>
        <p className="w-3/4 pb-8 text-zinc-300 text-lg">
          Got a question or proposal, or just want to say hello or even a coffee? Go ahead.
        </p>
        <Social />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;

