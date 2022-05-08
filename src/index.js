import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PopupboxContainer } from "react-popupbox";
import reportWebVitals from "./reportWebVitals";
import Footer from "./views/Footer";

import {
  Home,
  Animals,
  AnimalList,
  AnimalDetails,
  Login,
  Registro,
  About,
  Profile,
  EditProfile,
  Forums,
  GeneralCategory,
  ConcreteCategory,
  Thread,
  AdminPanel,
} from "./views";

// Application environment
import { UserProvider } from "./environment";

import Navigation from "./Navigation.js";

(async function() {
  await import("bootstrap/dist/css/bootstrap.min.css");
  await import("react-popupbox/dist/react-popupbox.css");
  await import("./index.css");
})();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <PopupboxContainer />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animales" element={<Animals />}>
            <Route path="" element={<AnimalList />} />
            <Route path=":idAnimal" element={<AnimalDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/about" element={<About />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/perfil/:userId" element={<Profile />} />
          <Route path="/editar-perfil" element={<EditProfile />} />
          <Route path="/foro" element={<Forums />}>
            <Route path="" element={<GeneralCategory />} />
            <Route path=":category">
              <Route path="" element={<ConcreteCategory />} />
              <Route path=":idThread" element={<Thread />} />
            </Route>
          </Route>
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>

        <Footer />
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
