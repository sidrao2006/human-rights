import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./pages/home/home";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.css";
import logPWAInstallToAnalytics from "pwa-install-analytics-log";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

logPWAInstallToAnalytics();