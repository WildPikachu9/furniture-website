import "bootstrap/dist/css/bootstrap.css";
import { FooterNavigation } from "./FooterNavigation";
import { useEffect, useState } from "react";

export const Footer = () => {
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
    <div className='footer-component'>
      <div className='footer-nav-container'>
        <h1 className='logo'>arsmeble.</h1>
        <FooterNavigation windowWidth={windowWidth} />
      </div>
      <section className='footer-policy-container'>
        <p>
          <a href='#'>Polityka prywatności</a>
        </p>
        <p>&copy; 2024 arsmeble.</p>
      </section>
    </div>
  );
};
