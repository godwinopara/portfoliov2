import * as React from "react";
import Button from "../Shared/Button";

const AboutBtn = () => {
  return (
    <div className="mt-5">
      <Button text="Contact Me" href="#contact" />
      <Button
        text="Resume"
        href="https://drive.google.com/file/d/1wB0s1jC0PID8ZTTQ6sFAW9ytZa9QO0OL/view?usp=sharing"
      />
    </div>
  );
};

export default AboutBtn;

