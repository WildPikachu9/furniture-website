import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export const SocialLinks = () => {
  return (
    <>
      <section className='footer-social-links'>
        <ul className='social-list' role='list'>
          <li className='social-link'>
            <a
              href='https://www.instagram.com/meble_anso.home'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram link'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className='social-link'>
            <a
              href='https://wa.me/48452779661'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Whatsapp link'
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li className='social-link'>
            <a href='tel:+48452779661' aria-label='Number phone'>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </a>
          </li>
          <li className='social-link'>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&to=ansohome.info@gmail.com'
              target='_blank'
              aria-label='Email link'
            >
              <FontAwesomeIcon icon={faAt} />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
