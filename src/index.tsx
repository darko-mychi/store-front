import React from "react";
import ReactDOM from "react-dom";
import AOS from "aos";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/index.scss";
import "aos/dist/aos.css";

import reportWebVitals from "./config/reportWebVitals";
import { unregister } from "./config/registerServiceWorker";

AOS.init({
  once: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
unregister();
