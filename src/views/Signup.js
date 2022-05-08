import React, { useState, useEffect } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

function Signup() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //TODO:funcionalidad
  const signupEmail = async (e) => {
    //TODO:contraseña = confirmar contraseña
    e.preventDefault();
    //Validar Captcha
    if (validateCaptcha(state.captcha, false)) {
      console.log(
        "Nombre:" +
          state.name +
          " Email:" +
          state.email +
          " Contraseña:" +
          state.password +
          " Confirmar-contraseña:" +
          state.password +
          " Captcha: " +
          state.captcha
      );
    } else {
      setState((state.captcha = ""));
      console.log(" Captcha: " + state.captcha);
      loadCaptchaEnginge(6, "black", "orange");
    }
  };

  //TODO:funcionalidad
  const signupGoogle = async (e) => {
    e.preventDefault();
    console.log(
      "Nombre:" +
        state.name +
        " Cuenta-google:" +
        state.email +
        " Contraseña:" +
        state.password +
        " Confirmar-contraseña:" +
        state.password
    );
  };

  //TODO:funcionalidad
  const signupTwitter = async (e) => {
    e.preventDefault();
    console.log(
      "Nombre:" +
        state.name +
        " Cuenta-twitter:" +
        state.email +
        " Contraseña:" +
        state.password +
        " Confirmar-contraseña:" +
        state.password
    );
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "black", "orange");
  }, []);

  return (
    <div className="login">
      <header className="mt-0 px-5 pb-0 pt-3">
        <h1 className="font-weight-light text-center fw-bold">Registro</h1>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-8 col-md-6 col-lg-4 text-center">
            <div className="text-center my-3 ">
              <img
                src="assets/person-circle.svg"
                className="img-fluid"
                alt="Icon Twitter"
              ></img>
            </div>
            <div className="mb-3">
              <input
                type="name"
                id="name"
                className="form-control"
                placeholder="Nombre"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
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
            <div className="mb-5">
              <input
                type="password"
                id="confirmpassword"
                className="form-control"
                placeholder="Confirmar contraseña"
                onChange={handleChange}
              />
            </div>
            <div className="justify-content-center mt-4 mb-2">
              <div className="col mt-3">
                <LoadCanvasTemplate
                  reloadText="Recargar Captcha"
                  reloadColor="orange"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="captcha"
                id="captcha"
                className="form-control"
                placeholder="Código captcha"
                onChange={handleChange}
              />
            </div>
            <div className="justify-content-center mt-4">
              <button
                className="btn btn-primary login-button m-auto"
                onClick={signupEmail}
              >
                Registrarse
              </button>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="text-center mb-0 col-4 ">
                <div className="btn btn-default" onClick={signupGoogle}>
                  <img
                    src="assets/logo-google.svg"
                    className="img-fluid"
                    alt="Logo Google"
                  ></img>
                </div>
              </div>
              <div className="text-center mb-0 col-4">
                <div className="btn btn-default" onClick={signupTwitter}>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid"
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

export default Signup;
