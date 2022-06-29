import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/flofal/BootcampApp/blob/main/README.md#bootcamp-app" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="https://www.linkedin.com/in/florencia-falco/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="florencia.falco93@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </footer>
  );
}

export default Footer;
