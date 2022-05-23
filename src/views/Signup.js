import React, { useState, useEffect } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { registerUser, baseUrl } from "../api/Api";

function Signup() {
  const [successMsg, setSuccessMsg] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

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

  const signupEmail = async (e) => {
    e.preventDefault();
    //Validar Captcha
    if (validateCaptcha(state.captcha, false)) {
      registerUser({
        username: state.name,
        email: state.email,
        password: state.password,
        repeatedPassword: state.confirmPassword,
      })
        .then((response) => {
          setAlertMsg("");
          console.log(response);
          setSuccessMsg(response.message);
        })
        .catch((error) => {
          console.log(error);
          setAlertMsg(error.error);
        });
    } else {
      setState((state.captcha = ""));
      console.log(" Captcha: " + state.captcha);
      loadCaptchaEnginge(6, "black", "orange");
    }
  };

  const signupGoogle = async (e) => {
    e.preventDefault();
    console.log("Signup google");
    window.open(baseUrl + "/users/google", "_self");
  };

  const signupGitHub = async (e) => {
    e.preventDefault();
    console.log("Signup github");
    window.open(baseUrl + "/users/github", "_self");
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "black", "orange");
  }, []);

  return (
    <div className="login">
      <header className="mt-0 px-5 pb-0 pt-3 ">
        <h1 className="font-weight-light text-center fw-bold">Registro</h1>
      </header>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <form className="col-8 col-sm-8 col-md-6 col-lg-4 text-center">
            <div className="text-center my-3 ">
              <img
                src="/assets/person-circle.svg"
                className="img-fluid"
                alt=""
              ></img>
            </div>
            {alertMsg !== "" && (
              <div className="alert alert-danger">{alertMsg}</div>
            )}
            {successMsg !== "" && (
              <div className="alert alert-success">{successMsg}</div>
            )}
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
                id="confirmPassword"
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
            <div className="row justify-content-center mt-4 mb-5">
              <div className="text-center mb-0 col-4 ">
                <div className="btn btn-default" onClick={signupGoogle}>
                  <img
                    src="/assets/logo-google.svg"
                    className="img-fluid"
                    alt="Logo Google"
                  ></img>
                </div>
              </div>
              <div className="text-center mb-0 col-4">
                <div className="btn btn-default" onClick={signupGitHub}>
                  <img
                    src="/assets/github.svg"
                    className="img-fluid"
                    alt="Icon GitHub"
                  ></img>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
