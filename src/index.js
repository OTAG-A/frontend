import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Application Views
import { Home, Animales, ListaAnimales, DetallesAnimal } from "./views";

import Navigation from "./Navigation.js";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animales" element={<Animales />}>
          <Route path="" element={<ListaAnimales />} />
          <Route path=":idAnimal" element={<DetallesAnimal />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
