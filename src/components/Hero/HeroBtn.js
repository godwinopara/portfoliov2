import * as React from "react";
import Button from "../Shared/Button";

const HeroBtn = () => {
  return (
    <div className="mt-10 md:flex">
      <Button text="Contact Me" className="btn-dark md:w-32 lg:w-52" href="#contact" />
      <Button
        text="Resume"
        className="btn-dark md:w-32 lg:w-52"
        href="https://drive.google.com/file/d/1lH6BUMoKbcGCNjUvw8-KO_MfcVa7eNyr/view?usp=sharing"
      />
    </div>
  );
};

export default HeroBtn;

