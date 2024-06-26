import "../../../i18next";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Navigation } from "../header/Navigation";

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
          <Link to='/oferta'>{t("general.menu.offers")}</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/kontakt'>{t("general.menu.contact")}</Link>
        </Nav.Item>
      </Nav>
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
          <Accordion.Item eventKey='0' className='scroll-to-up-button'>
            <Accordion.Header onClick={scrollToTop}>
              {t("general.menu.scrollToUp")}
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      ) : (
        <div className='footer-nav-decstop'>
          <div className='footer-nav-decstop-item'>
            <Navigation />
          </div>
          <div className='footer-nav-decstop-item'>
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
