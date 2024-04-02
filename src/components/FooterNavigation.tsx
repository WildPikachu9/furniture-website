import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faSquarePhone,
  faAt,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FooterProps {
  windowWidth: number;
}

export const FooterNavMain = () => {
  return (
    <>
      <Nav className='navigation footer-nav'>
        <Nav.Item>
          <Link to='/'>strona główna</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/o-nas'>o nas</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/galeria'>galeria</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/kontakt'>kontakt</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export const FooterNavOffers = () => {
  return (
    <>
      <Nav className='navigation footer-nav justify-content-start'>
        <Nav.Item>
          <Link to='/oferta'>nasza oferta</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/oferta'>1 oferta</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/oferta'>2 oferta</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/oferta'>3 oferta</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/oferta'>4 oferta</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
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
export const FooterNavigation: React.FC<FooterProps> = ({ windowWidth }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='footer-nav-component'>
      {windowWidth <= 769 ? (
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>skontaktuj się z nami</Accordion.Header>
            <Accordion.Body>
              <SocialLinks />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>dowiedz się o nas więcej</Accordion.Header>
            <Accordion.Body>
              <FooterNavMain />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>zobacz naszą ofertę</Accordion.Header>
            <Accordion.Body>
              <FooterNavOffers />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='0' className='scroll-to-up-button'>
            <Accordion.Header onClick={scrollToTop}>
              przewiń w górę
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      ) : (
        <div className='footer-nav-decstop'>
          <div className='footer-nav-decstop-item'>
            <h3>dowiedz się o nas więcej</h3>
            <FooterNavMain />
          </div>
          <div className='footer-nav-decstop-item'>
            <h3>zobacz naszą ofertę</h3>
            <FooterNavOffers />
          </div>
          <div className='footer-nav-decstop-item'>
            <h3>skontaktuj się z nami</h3>
            <SocialLinks />
          </div>
          <div className='footer-nav-decstop-item scroll-to-up-button-decstop'>
            <button onClick={scrollToTop} className='scroll-to-up-button'>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
