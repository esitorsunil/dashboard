// components/Sidebar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Sidebar = ({ onNavClick }) => {
  const links = [
    "overview",
    "product-analysis",
    "tasks",
    "users",
    "reports",
    "messages",
    "settings",
    "profile",
  ];

  return (
    <div
      className="bg-black text-white p-3"
      style={{
        width: "240px",
        minHeight: "100%",
        overflowY: "auto",
      }}
    >
      <Nav className="flex-column">
        {links.map((link) => (
          <NavLink
            key={link}
            to={link}
            onClick={onNavClick}
            className={({ isActive }) =>
              `nav-link text-white rounded px-3 py-2 mb-2 ${isActive ? "bg-primary" : "hover:bg-secondary"}`
            }
          >
            {link
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </NavLink>
        ))}
        <Logout />
      </Nav>
    </div>
  );
};

export default Sidebar;
