import { Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Navigation = () => {
  return (
    <Nav className='navigation justify-content-center'>
      <Nav.Item>
        <Nav.Link href='/'>strona główna</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/o-nas'>o nas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/galeria'>galeria</Nav.Link>
      </Nav.Item>
      <NavDropdown title='oferta' id='basic-nav-dropdown' className='dropdown'>
        <NavDropdown.Item href='/oferta'>oferta 0</NavDropdown.Item>
        <NavDropdown.Item href='/oferta/#'>oferta 1</NavDropdown.Item>
        <NavDropdown.Item href='/oferta/#'>oferta 2</NavDropdown.Item>
        <NavDropdown.Item href='/oferta/#'>oferta 3</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link href='/kontakt'>kontakt</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
