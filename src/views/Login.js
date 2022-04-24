import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendServer = async (e) => {
    e.preventDefault();
    console.log("Email:" + state.email + "Contraseña:" + state.password);
  };

  const goPWD = () => {
    //TODO: popup olvido contraseña
  };

  const goSignUp = () => {
    //TODO: no funciona
    return <Navigate to="/registro" />;
  };

  return (
    <div className="login">
      <header className="mt-0 px-5 pb-0 pt-3">
        <h1 className="font-weight-light text-center fw-bold">Inicio Sesión</h1>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <div className="text-center mb-0 ">
              <i class="bi bi-person-circle style-icons-auth"></i>
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
            <p className="text-center">
              <a href="#!" className="text-warning" onClick={goPWD}>
                ¿Has olvidado la contraseña?
              </a>
            </p>
            <div className="justify-content-center mt-4 d-grid gap-2 col-6 mx-auto ">
              <button className="btn btn-primary" onClick={sendServer}>
                Iniciar Sesión
              </button>
            </div>
            <div className="justify-content-center mt-4 d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-secondary" onClick={goSignUp}>
                Registrarse
              </button>
            </div>
            <div class="row justify-content-center mt-4">
              <div className="text-center mb-0 col-4 ">
                <div className="container">
                  {/* TODO: imagen no se ve*/}
                  <img
                    src="../assets/logo-google.png"
                    class="img-fluid"
                    alt="Logo Google"
                    sizes="50px"
                  ></img>
                </div>
              </div>
              <div className="text-center mb-0 col-4">
                <i class="bi bi-twitter style-icon-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
