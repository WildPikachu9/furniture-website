import { Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    setPrevScrollPos(window.scrollY);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`header-container ${visible ? "" : "hidden"}`}>
      <div className='header-logo'>
        {windowWidth <= 768 ? (
          <Button onClick={handleShow} className='navbar-button'>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        ) : null}
        <h1 className='logo'>arsmeble.</h1>
      </div>
      <div>
        {windowWidth <= 768 ? (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>arsmeble.</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navigation />
            </Offcanvas.Body>
          </Offcanvas>
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
};
