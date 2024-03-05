import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Nav className='navigation justify-content-center'>
      <Nav.Item>
        <Link to='/'>strona główna</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/o-nas'>o nas</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/galeria'>galeria</Link>
      </Nav.Item>
      <NavDropdown title='oferta' id='basic-nav-dropdown' className='dropdown'>
        <NavDropdown.Item>
          <Link to='/oferta'>oferta 0</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/oferta'>oferta 0</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/oferta'>oferta 0</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Link to='/kontakt'>kontakt</Link>
      </Nav.Item>
    </Nav>
  );
};
