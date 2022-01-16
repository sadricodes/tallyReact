import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tally2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="User Test Links" id="basic-nav-dropdown">
              <LinkContainer to="login">
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="register">
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="users">
                <NavDropdown.Item>User Directory</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="users/myprofile">
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="users/editprofile">
                <NavDropdown.Item>Edit My Profile</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
