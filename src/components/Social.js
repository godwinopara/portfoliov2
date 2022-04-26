import * as React from "react";
import SocialLink from "./SocialLink";
import { faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div>
      <SocialLink icon={faInstagram} href="https://www.instagram.com/godwin_ahamefula/" />
      <SocialLink icon={faTwitter} href="https://www.twitter.com/godwinopara12" />
      <SocialLink icon={faGithub} href="https://www.github.com/godwinopara" />
      <SocialLink icon={faLinkedin} href="https://www.linkedin/in/godwinopara" />
    </div>
  );
};

export default Social;

