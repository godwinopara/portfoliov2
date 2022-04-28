import * as React from "react";

const Button = ({ text, className, href }) => {
  return (
    <a href={href}>
      <button className={`btn ${className}`}>
        <div className="btn-text">{text}</div>
      </button>
    </a>
  );
};

export default Button;

