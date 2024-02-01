import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom";

export default function Navbarr() {
  return (
    <>
      
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">
              | REALTIME TASK MANAGEMENT |
            </Navbar.Brand>
            <Nav>
              <Link to="/" className="text-decoration-none">
                <li className="mx-4">HOME</li>
              </Link>
              <Link to="/login" className="text-decoration-none">
                <li >LOGIN</li>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      
    </>
  );
}
