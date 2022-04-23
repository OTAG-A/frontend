import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./environment";

import { User } from "./models";

// Navigation bar of the application
function Navigation() {

  let currentUser = useContext(UserContext);

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
              {currentUser && currentUser.isAdmin &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">Panel administración</NavLink>
                </li>
              }
              <li className="nav-item">
                {/* Si está loggeado, mostrar la foto de perfil. Sino, mostrar el botón de login. */}
                {currentUser ?
                  <NavLink className="nav-link" to="/perfil">
                    {currentUser.image ?
                      <img src={currentUser.image} className="rounded-circle" style={{ width: 40, height: 40 }} />
                      : <div className="rounded-circle" style={{ width: 40, height: 40, backgroundColor: "lightgray" }}></div>
                    }
                  </NavLink>
                  : <NavLink className="nav-link" to="/login">Log In</NavLink>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
