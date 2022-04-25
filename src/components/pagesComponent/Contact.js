import * as React from "react";
import FormInput from "../FormInput";

const Contact = () => {
  return (
    <section className="px-40 py-10 bg-zinc-900">
      <div className="grid place-items-center">
        <h1 className="font-bold text-4xl py-5 text-light-blue-1">Send me a message!</h1>
        <p className="w-2/5 text-center text-xl pb-20 text-zinc-200">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>
      <form className="w-3/4 mx-auto">
        <div className="grid grid-cols-2 gap-x-10 mb-5">
          <FormInput type="text" name="name" placeholder="Enter your name" label="Your Name" />
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email address"
            label="Email Address"
          />

          <div className="col-span-2 mt-10">
            <label htmlFor="message" className="text-light-blue-1 block mb-1">
              Your Message
            </label>
            <br />
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Hi Godwin, I’m reaching out to see if you’d be interested in a job opportunity. Please let me know if you are available to discuss."
              className="w-full bg-transparent border-b outline-none text-zinc-400 font-light text-sm"
            ></textarea>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;

