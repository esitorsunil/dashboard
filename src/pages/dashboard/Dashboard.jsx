// pages/dashboard/Dashboard.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/BreadCrumbs";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-grow-1 d-flex">
        {sidebarOpen && <Sidebar onNavClick={handleNavClick} />}
        <div className="flex-grow-1 p-4" style={{ background: "#f8f9fa", overflowY: "auto" }}>
          <Breadcrumbs />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
