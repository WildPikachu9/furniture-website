import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquarePhone, faAt } from "@fortawesome/free-solid-svg-icons";

export const SocialLinks = () => {
  return (
    <>
      <section className='footer-social-links'>
        <ul className='social-list' role='list'>
          <li className='social-link'>
            <a href='#' aria-label='Napisz nam na instagramie'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Napisz nam na facebook'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Zadzwoń'>
              <FontAwesomeIcon icon={faSquarePhone} />
            </a>
          </li>
          <li className='social-link'>
            <a href='#' aria-label='Napisz maila'>
              <FontAwesomeIcon icon={faAt} />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
