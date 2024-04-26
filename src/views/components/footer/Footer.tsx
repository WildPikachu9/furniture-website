import "../../../i18next";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";
import { FooterNavigation } from "./FooterNavigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../languageSwitcher/LanguageSwitcher";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className='footer-component'>
      <div className='footer-nav-container'>
        <h1 className='logo'>arsmeble.</h1>
        <FooterNavigation windowWidth={windowWidth} />
      </div>
      <section className='footer-policy-container'>
        <LanguageSwitcher />
        <p>
          <Link to={"/privacy-policy"}>{t("general.menu.policy")}</Link>
        </p>
        <p>&copy; 2024 arsmeble.</p>
      </section>
    </footer>
  );
};
