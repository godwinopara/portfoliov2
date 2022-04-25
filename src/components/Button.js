import * as React from "react";

const Button = ({ text, className }) => {
  return (
    <button className={`btn ${className}`}>
      <div className="btn-text">{text}</div>
    </button>
  );
};

export default Button;

