import React, { useState } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";

function Registro() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendServer = async (e) => {
    //TODO:contraseña = confirmar contraseña
    e.preventDefault();
    console.log(
      "Nombre:" +
        state.name +
        " Email:" +
        state.email +
        " Contraseña:" +
        state.password +
        " Confirmar-contraseña:" +
        state.password
    );
  };

  return (
    <div className="login">
      <header className="mt-0 px-5 pb-0 pt-3">
        <h1 className="font-weight-light text-center fw-bold">Registro</h1>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-8 col-md-6 col-lg-4">
            <div className="text-center mb-0 ">
              <i class="bi bi-person-circle style-icons-auth"></i>
            </div>
            <div className="mb-3">
              <input
                type="name"
                id="name"
                className="form-control form-control-lg"
                placeholder="Nombre"
                onChange={handleChange}
              />
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
            <div className="mb-3">
              <input
                type="password"
                id="confirmpassword"
                className="form-control form-control-lg"
                placeholder="Confirmar contraseña"
                onChange={handleChange}
              />
            </div>
            <div className="justify-content-center mt-4 d-grid gap-2 col-6 mx-auto ">
              <button className="btn btn-primary" onClick={sendServer}>
                Registrarse
              </button>
            </div>
            <div class="row justify-content-center mt-3">
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

export default Registro;
