import * as React from "react";

const FormInput = ({ type, name, placeholder, label }) => {
  return (
    <div>
      <label htmlFor="name" className="mb-1 block text-light-blue-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="block mb-12 py-2 w-full bg-transparent border-b font-light text-sm outline-none text-zinc-400 focus:border-light-blue-1"
      />
    </div>
  );
};

export default FormInput;

