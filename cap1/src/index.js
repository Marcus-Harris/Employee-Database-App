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
import { Auth0Provider } from "@auth0/auth0-react";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <Router>
  //   <Auth0ProviderWithHistory>
  //     <App />
  //   </Auth0ProviderWithHistory>
  // </Router>,
  <Router>
    <Auth0Provider
      domain="dev-t51e-uya.us.auth0.com"
      clientId="paT2ZZ4Qu0qfGzqZeL0mYYLz9TfSceax"
      redirectUri={"http://localhost:3000/add"} // this is just where the page goes after logging in
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);

export { HomeContent, Footer, Hero, Loading, NavBar };
// reportWebVitals();