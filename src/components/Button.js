import * as React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`text-white rounded-sm bg-light-blue-2 px-10 py-2 text-center last:ml-4 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

