import React from "react";
import { NavLink } from "react-router-dom";

// Navigation bar of the application
function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Logo guapo
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/animales">
                  Animales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/foro">
                  Foro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/estadisticas">
                  Estadísticas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Sobre nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
