// components/Overview.js
import React from "react";
import "./Overview.css";
import { Line, Pie, Doughnut } from "react-chartjs-2";

const Overview = () => {
  return (
    <div className="overview">
      <header>
        <h2>Overview</h2>
        <div className="profile">
          <span>Administrator</span>
          <div className="avatar">A</div>
        </div>
      </header>
      <div className="metrics">
        <div className="metric-card">
          <h3>Document</h3>
          <p>146,000</p>
          <small>+17% since last week</small>
        </div>
        <div className="metric-card">
          <h3>Contact</h3>
          <p>1,400</p>
          <small>+17% since last week</small>
        </div>
        <div className="metric-card">
          <h3>Email</h3>
          <p>150,700</p>
          <small>+17% since last week</small>
        </div>
        <div className="overview-grid">
        <h3>Popular Product</h3>
          <p>Gadget Converter</p>
          <small>$250</small>
          <p>Lens Camera</p>
          <small>$50</small>
          <p>Airpods</p>
          <small>$100</small>
          <p>Lens Macbook</p>
          <small>$999</small>

        </div>
      </div> 
      

      <div className="charts">
        <div className="chart">Recent Workflow (Chart Placeholder)</div>
        
        <div className="chart">Recent Marketing (Chart Placeholder)</div>
      </div>
       <div className="document-table">
        <h3>Document Tracking</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>File</th>
              <th>Category</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annual Report</td>
              <td>PDF</td>
              <td>Property</td>
              <td>Diana Matthews</td>
              <td>Send</td>
            </tr>
            <tr>
              <td>Business Plan</td>
              <td>Word</td>
              <td>Cryptocurrency</td>
              <td>Philip James</td>
              <td>Send</td>
            </tr>
            <tr>
              <td>Marketing Tool</td>
              <td>PDF</td>
              <td>Content Creator</td>
              <td>Amanda Ross</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Overview;
