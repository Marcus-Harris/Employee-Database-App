// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import "./index.css";
import HomeContent from "./Components/home-content";
import Footer from "./Components/footer";
import Hero from "./Components/hero";
import Loading from "./Components/loading";
import NavBar from "./Components/nav-bar";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);

export { HomeContent, Footer, Hero, Loading, NavBar };
// reportWebVitals();