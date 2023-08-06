import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/youtube" component={App} />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
