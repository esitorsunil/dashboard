// components/Header.jsx
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" className="px-3 shadow-sm justify-content-between">
      <Button variant="outline-light" onClick={toggleSidebar}>
        <List size={24} />
      </Button>
      <Navbar.Brand className="text-white fw-semibold fs-5">Admin Dashboard</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
