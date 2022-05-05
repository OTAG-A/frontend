import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./components/Popup";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //TODO:funcionalidad
  const loginEmail = async (e) => {
    e.preventDefault();
    console.log("Email:" + state.email + "Contraseña:" + state.password);
  };

  //TODO:funcionalidad
  const loginGoogle = async (e) => {
    e.preventDefault();
    console.log(
      "Cuenta-google:" + state.email + "Contraseña:" + state.password
    );
  };

  //TODO:funcionalidad
  const loginTwitter = async (e) => {
    e.preventDefault();
    console.log(
      "Cuenta-google:" + state.email + "Contraseña:" + state.password
    );
  };

  //TODO: popup olvido contraseña
  const recoverPassword = () => {
    console.log("Recuperar contraseña al correo " + state.email + " del form");
  };

  return (
    <div className="login">
      <header className="mt-0 px-5 pb-0 pt-3">
        <h1 className="font-weight-light text-center fw-bold">Inicio Sesión</h1>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-8 col-md-6 col-lg-4 text-center">
            <div className="text-center my-3 ">
              <img
                src="assets/person-circle.svg"
                class="img-fluid"
                alt="Icon Twitter"
              ></img>
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control "
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
            <p className="text-center">
              <a
                href="#!"
                className="text-warning"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                ¿Has olvidado la contraseña?
              </a>
            </p>
            <Popup
              message={"¿Enviar correo de recuperación de contraseña?"}
              action={recoverPassword}
            />
            <div className="justify-content-center mt-4">
              <button
                className="btn btn-primary login-button"
                onClick={loginEmail}
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="justify-content-center mt-4">
              <button
                className="btn btn-secondary login-button"
                onClick={() => navigate("/registro")}
              >
                Registrarse
              </button>
            </div>
            <div class="row justify-content-center mt-4">
              <div className="text-center mb-0 col-4 ">
                <div button class="btn btn-default" onClick={loginGoogle}>
                  <img
                    src="assets/logo-google.svg"
                    class="img-fluid"
                    alt="Logo Google"
                  ></img>
                </div>
              </div>
              <div className="text-center mb-0 col-4">
                <div button class="btn btn-default" onClick={loginTwitter}>
                  <img
                    src="assets/twitter.svg"
                    class="img-fluid"
                    alt="Icon Twitter"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
