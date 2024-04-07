import "../../../i18next";
import { useTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

interface NavProps {
  handleClose?: () => void;
}

export const Navigation = ({ handleClose }: NavProps) => {
  const { t } = useTranslation();

  return (
    <Nav className='navigation main-nav justify-content-center'>
      <Nav.Item onClick={handleClose}>
        <Link to='/'>{t("general.menu.home")}</Link>
      </Nav.Item>
      <Nav.Item onClick={handleClose}>
        <Link to='/o-nas'>{t("general.menu.about")}</Link>
      </Nav.Item>
      <Nav.Item onClick={handleClose}>
        <Link to='/galeria'>{t("general.menu.gallery")}</Link>
      </Nav.Item>
      <Nav.Item onClick={handleClose}>
        <Link to='/oferta'>{t("general.menu.offers")}</Link>
      </Nav.Item>
      <Nav.Item onClick={handleClose}>
        <Link to='/kontakt'>{t("general.menu.contact")}</Link>
      </Nav.Item>
    </Nav>
  );
};
