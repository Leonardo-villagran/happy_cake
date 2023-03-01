import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FaBirthdayCake } from "react-icons/fa";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="light">
        <Container className="justify-content-start">
        <Nav className="me-auto">
          <Link to="/" className="text-white ms-3 text-decoration-none">
          <FcHome />Home
          </Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
          <FcContacts  />Contacto
          </Link>
          </Nav>
          <Nav className="justify-content">
          <Link to="/" className="text-white ms-3 text-decoration-none">
           Happy Cake<FaBirthdayCake />
          </Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
