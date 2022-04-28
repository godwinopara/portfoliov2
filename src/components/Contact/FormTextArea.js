import * as React from "react";

const FormTextArea = () => {
  return (
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
  );
};

export default FormTextArea;
