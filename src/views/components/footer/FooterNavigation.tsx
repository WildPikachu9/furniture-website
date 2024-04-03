import "../../../i18next";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <>
      <Nav className='navigation footer-nav'>
        <Nav.Item>
          <Link to='/'>{t("general.menu.home")}</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/o-nas'>{t("general.menu.about")}</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/galeria'>{t("general.menu.gallery")}</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/kontakt'>{t("general.menu.contact")}</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export const FooterNavOffers = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav className='navigation footer-nav justify-content-start'>
        <Nav.Item>
          <Link to='/oferta'>{t("general.menu.offers")}</Link>
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
  const { t } = useTranslation();

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
            <Accordion.Header>
              {t("general.headersHome.contactUs")}
            </Accordion.Header>
            <Accordion.Body>
              <SocialLinks />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              {t("general.headersHome.moreAboutUs")}
            </Accordion.Header>
            <Accordion.Body>
              <FooterNavMain />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              {t("general.headersHome.moreAboutOffers")}
            </Accordion.Header>
            <Accordion.Body>
              <FooterNavOffers />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='0' className='scroll-to-up-button'>
            <Accordion.Header onClick={scrollToTop}>
              {t("general.menu.scrollToUp")}
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      ) : (
        <div className='footer-nav-decstop'>
          <div className='footer-nav-decstop-item'>
            <h3>{t("general.headersHome.moreAboutUs")}</h3>
            <FooterNavMain />
          </div>
          <div className='footer-nav-decstop-item'>
            <h3>{t("general.headersHome.moreAboutOffers")}</h3>
            <FooterNavOffers />
          </div>
          <div className='footer-nav-decstop-item'>
            <h3>{t("general.headersHome.contactUs")}</h3>
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
