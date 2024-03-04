import { Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='header-container'>
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
    </div>
  );
};
