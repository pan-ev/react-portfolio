import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon className="footerIcon" icon={faGithub} />
      <FontAwesomeIcon className="footerIcon" icon={faLinkedin} />
    </footer>
  );
}
