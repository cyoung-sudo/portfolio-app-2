import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Routing
import { HashRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);