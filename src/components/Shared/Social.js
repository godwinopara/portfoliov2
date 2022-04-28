import * as React from "react";
import SocialLink from "./SocialLink";
import { faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div>
      <SocialLink
        icon={faInstagram}
        href="https://www.instagram.com/godwin_ahamefula/"
        className="hover:text-red-500"
      />
      <SocialLink
        icon={faTwitter}
        href="https://www.twitter.com/godwinopara12"
        className="hover:text-sky-500"
      />
      <SocialLink
        icon={faGithub}
        href="https://www.github.com/godwinopara"
        className="hover:text-black"
      />
      <SocialLink
        icon={faLinkedin}
        href="https://www.linkedin/in/godwinopara"
        className="hover:text-blue-700"
      />
    </div>
  );
};

export default Social;

