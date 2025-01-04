// components/Sidebar.js
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
  
    <div className="sidebar">
      <h1>CRM.io</h1>
      <ul>
        <li>Dashboard</li>
        <li>Management</li>
        <ul>
          <li>Document</li>
          <li>Contact</li>
          <li>Prospect</li>
          <li>Workflow</li>
        </ul>
        <li>Connection</li>
        <ul>
          <li>Chat Integration</li>
          <li>Marketing Automation</li>
          <li>Email Integration</li>
        </ul>
        <li>Customer</li>
        <ul>
          <li>Transaction</li>
          <li>Maintenance</li>
        </ul>
      </ul>
    </div>
    
  );
};

export default Sidebar;
