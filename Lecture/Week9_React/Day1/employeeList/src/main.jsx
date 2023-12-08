import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// npm install react-router-dom before this
// import BrowserRouter and name it as Router
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
