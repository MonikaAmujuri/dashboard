import React from "react";
import Sidebar from "./components/sidebar";
import Overview from "./components/overview";
import "./components/ChartComponent";




import "./App.css";


function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Overview />
    </div>

  );
}




export default App;