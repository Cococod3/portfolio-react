import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWe } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  fab,
  faInstagram,
  faGithub,
  faYoutube,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// The function SocialMedia() is a component that returns a section with a ul and li elements.
function SocialMedia() {
  return (
    <section>
      <ul class="icon-list">
        <li class="icon-item">
          <a href="https://github.com/Cococod3" class="icon-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-git-hub">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </li>
        <li class="icon-item">
          <a href="https://twitter.com/cococod3" class="icon-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter">
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </i>
          </a>
        </li>
        <li class="icon-item">
          <a href="https://www.instagram.com/cocositoverde/" class="icon-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
        </li>
        <li class="icon-item">
          <a href="https://www.youtube.com/c/COCOGREEN" class="icon-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </i>
          </a>
        </li>
        <li class="icon-item">
          <a
            href="https://www.linkedin.com/in/oliver-green-frontdesign/"
            class="icon-link" target="_blank" rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in">
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialMedia;
