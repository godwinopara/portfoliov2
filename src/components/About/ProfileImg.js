import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProfileImg = () => {
  return (
    <div className="md:text-center">
      <StaticImage src="../../images/portfolio-image.png" alt="profile image" />
    </div>
  );
};

export default ProfileImg;

