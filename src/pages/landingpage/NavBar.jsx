import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/pranathiss-white.webp"
            alt="logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </NavLink>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
                <NavLink to="/" className="nav-link" end>
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>     
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
