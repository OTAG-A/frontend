import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Animal } from "../../models";
import ComunDetails from "./components/ComunDetails";
import { UserContext } from "../../environment";

function AnimalDetails() {
  let { idAnimal } = useParams();
  let { user: currentUser } = useContext(UserContext);

  useEffect(() => {
    // TODO: Obtener detalles de animal de la API dado su ID
  }, [idAnimal]);

  const animal = Animal.preview();

  return (
    <div className="animalDetails">
      <ComunDetails animal={animal} />
      <div className="row my-3">
        {currentUser ? (
          <div className="row">
            <h3>Detalles de adopción</h3>
            <div className="row mx-5">
              <ul>
                <li class="my-5">
                  <b> Descripción: </b> {animal.observaciones}
                </li>
                <li class="my-5">
                  <b> Observaciones: </b> {animal.observacionesVet}
                </li>
                <li class="my-5">
                  <b> Solicitante: </b> {animal.nombreSolicitante}
                </li>
                <li class="my-5">
                  <b> Dirección del solicitante: </b>{" "}
                  {animal.domicilioSolicitante}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="row align-items-center px-5">
            <div className="container px-5">
              <p
                className="text-center m-5"
                style={{ backgroundColor: "orange", color: "black" }}
              >
                Para más información y detalles de adopción es necesario{" "}
                <b>
                  estar{" "}
                  <a href={"/registro"} style={{ color: "black" }}>
                    registrado
                  </a>
                </b>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimalDetails;
