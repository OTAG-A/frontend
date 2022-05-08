import React from "react";

import * as moment from "moment";

function ComunDetails({ animal }) {
  return (
    <div className="comun-details">
      <header className="mt-5">
        <h1 className="font-weight-lightfw-bold">{animal.nombre}</h1>
      </header>
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <div className="row mt-4">
            <img
              src={animal.imagen}
              class="img-fluid"
              alt="Imagen animal"
              style={{ height: "60vh", width: "60vh", objectFit: "cover" }}
            ></img>
          </div>
          <div className="row mt-2 p-2">
            <p>
              Visita el foro de{" "}
              <a
                href={"/foro/" + animal.especie}
                class="text-decoration-underline"
                style={{ color: "orange" }}
              >
                {animal.especie}
              </a>{" "}
              para resolver tus dudas
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
              {" "}
              <ul>
                <li class="my-5">
                  <b> Raza: </b> {animal.raza}
                </li>
                <li class="my-5">
                  <b> Sexo: </b> {animal.sexo}
                </li>
                <li class="my-5">
                  <b> Nacimiento: </b>{" "}
                  {moment(animal.fechaNac).format("DD-MM-YYYY")}
                </li>
                <li class="my-5">
                  <b> Edad: </b> {animal.edad}
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <ul>
                <li class="my-5">
                  <b> Color: </b> {animal.color}
                </li>
                <li class="my-5">
                  <b> Peligroso: </b> {animal.peligroso ? "Sí" : "No"}
                </li>
                <li class="my-5">
                  <b> Tamaño: </b> {animal.tamagno}
                </li>
                <li class="my-5">
                  <b> Esterilizado: </b> {animal.esterilizado}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComunDetails;
