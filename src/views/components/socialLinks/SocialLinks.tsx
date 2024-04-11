import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export const SocialLinks = () => {
  return (
    <>
      <section className='footer-social-links'>
        <ul className='social-list' role='list'>
          <li className='social-link'>
            <a href='#' aria-label='Instagram link'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Facebook link'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Whatsapp link'>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Number phone'>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Email link'>
              <FontAwesomeIcon icon={faAt} />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
