import * as React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "../Shared/Button";

const ContactForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:w-4/5 md:mr-auto md:ml-auto lg:w-full lg:grid-cols-2 lg:gap-x-10 mb-5">
        <FormInput type="text" name="name" placeholder="Enter your name" label="Your Name" />
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email address"
          label="Email Address"
        />
        <FormTextArea />
      </div>

      <div className="mt-10 md:w-4/5 md:ml-auto md:mr-auto lg:w-full">
        <Button text="SEND MESSAGE" className="text-sm tracking-widest w-60" />
      </div>
    </form>
  );
};

export default ContactForm;

