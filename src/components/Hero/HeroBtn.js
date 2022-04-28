import * as React from "react";
import Button from "../Shared/Button";

const HeroBtn = () => {
  return (
    <div className="mt-10">
      <Button text="Contact Me" className="btn-dark" href="#contact" />
      <Button
        text="Resume"
        className="btn-dark"
        href="https://drive.google.com/file/d/1wB0s1jC0PID8ZTTQ6sFAW9ytZa9QO0OL/view?usp=sharing"
      />
    </div>
  );
};

export default HeroBtn;
