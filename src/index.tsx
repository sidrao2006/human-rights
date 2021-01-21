import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/home/home";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />;
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
