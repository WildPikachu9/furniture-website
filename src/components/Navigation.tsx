import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

interface NavProps {
  handleClose?: () => void;
}

export const Navigation = ({ handleClose }: NavProps) => {
  return (
    <Nav className='navigation justify-content-center'>
      <Nav.Item onClick={handleClose}>
        <Link to='/'>strona główna</Link>
      </Nav.Item>
      <Nav.Item onClick={handleClose}>
        <Link to='/o-nas'>o nas</Link>
      </Nav.Item>
      <Nav.Item onClick={handleClose}>
        <Link to='/galeria'>galeria</Link>
      </Nav.Item>
      <NavDropdown title='oferta' id='basic-nav-dropdown' className='dropdown'>
        <NavDropdown.Item onClick={handleClose}>
          <Link to='/oferta'>oferta 0</Link>
        </NavDropdown.Item>
        <NavDropdown.Item onClick={handleClose}>
          <Link to='/oferta'>oferta 0</Link>
        </NavDropdown.Item>
        <NavDropdown.Item onClick={handleClose}>
          <Link to='/oferta'>oferta 0</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Item onClick={handleClose}>
        <Link to='/kontakt'>kontakt</Link>
      </Nav.Item>
    </Nav>
  );
};
