import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./layout.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import ThemeProvider from "react-bootstrap/ThemeProvider";

const Layout = (props) => {
  return (
    <ThemeProvider breakpoints={["xs", "lg", "md", "sm"]} minBreakpoint="xs">
      <Container fluid className="container-topbar">
        <Navbar bg="dark" variant="dark" expand="md" className="topNavbar">
          <Container fluid>
            <Navbar.Brand href="#">El cuervo</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="/login">Ingresar</NavDropdown.Item>
                    <NavDropdown.Item href="/register">
                      Registrarse
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
      <Container fluid className="container-children">
        {props.children}
      </Container>
    </ThemeProvider>
  );
};
export default Layout;
