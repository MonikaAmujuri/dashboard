// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Settings from "./components/Settings";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
