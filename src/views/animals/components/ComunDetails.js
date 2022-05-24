import React, { useContext } from "react";
import { UserContext } from "../../../environment";

import { Link } from "react-router-dom";

import moment from "moment";

function getAgeFromBirthday(birthday) {
  var m = moment(birthday, "YYYY-MM-DD");
  const years = moment().diff(m, "years", false);
  const days = moment().diff(m.add(years, "years"), "days", false);
  const months = Math.floor(days / 30);
  console.log(moment(), m);
  return (
    (years > 0 ? years + " años " : "") + (months > 0 ? months + " meses" : "")
  );
}

function ComunDetails({ animal }) {
  let { user: currentUser } = useContext(UserContext);

  return (
    <div className="comun-details">
      <header className="mt-5">
        <h1 className="font-weight-lightfw-bold">{animal.name}</h1>
      </header>
      <div className="row align-items-center">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <div className="row mt-4">
            <img
              src={animal.photo ? animal.photo : "/assets/animales.png"}
              class="img-fluid"
              alt="Imagen animal"
              style={{ height: "60vh", width: "60vh", objectFit: "cover" }}
            ></img>
          </div>
          <div className="row mt-2 p-2">
            <p>
              Visita el foro de{" "}
              <Link
                to={"/foro/" + animal.specie}
                class="text-decoration-underline"
                style={{ color: "orange" }}
              >
                {animal.specie}
              </Link>{" "}
              para resolver tus dudas
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
              <ul>
                <li class="mb-5">
                  <b> Raza: </b> {animal.breed}
                </li>
                <li class="mb-3">
                  <b> Sexo: </b> {animal.sex}
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <ul>
                <li class="mb-5">
                  <b> Peligroso: </b> {animal.danger ? "Sí" : "No"}
                </li>
                {currentUser && (
                  <li class="mb-5">
                    <b> Esterilizado: </b> {animal.sterile ? "Sí" : "No"}
                  </li>
                )}
              </ul>
            </div>

            {currentUser && (
              <>
                <div className="col-sm-12">
                  <ul>
                    <li class="my-5">
                      <b> Descripción: </b> {animal.description}
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <ul>
                    <li class="my-5">
                      <b> Color: </b> {animal.color}
                    </li>
                    <li class="my-5">
                      <b> Tamaño: </b> {animal.size}
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <ul>
                    <li class="my-5">
                      <b> Nacimiento: </b>{" "}
                      {moment(animal.bornDate).format("DD-MM-YYYY")}
                    </li>
                    <li class="my-5">
                      <b> Edad: </b> {getAgeFromBirthday(animal.bornDate)}
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComunDetails;
