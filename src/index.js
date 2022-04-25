import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Application Views
import {
  Home,
  Animales,
  ListaAnimales,
  DetallesAnimal,
  Login,
  Registro,
} from "./views";

// Application environment
import { UserProvider } from "./environment";

import Navigation from "./Navigation.js";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animales" element={<Animales />}>
            <Route path="" element={<ListaAnimales />} />
            <Route path=":idAnimal" element={<DetallesAnimal />} />
          </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
