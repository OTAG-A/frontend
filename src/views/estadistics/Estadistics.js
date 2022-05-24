import React from "react";
import AnimalKinds from "./components/AnimalKinds";
import AdopVSAban from "./components/AdopVSAban";
import Dangerous from "./components/Dangerous";

function Estatistics() {
  return (
    <div className="home">
      <header className="mt-0 px-5 pb-0 pt-3 mb-5">
        <h1 className="font-weight-light text-center fw-bold">Estadísticas</h1>
      </header>
      <div className="container mb-5">
        <div className="row align-items-center mt-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-5 p-2">
            <AnimalKinds />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-7 p-2 text-justify">
            <p>
              En esta gráfica se puede observar
              <b> cuántos animales de cada tipo</b>, de todos los animales que
              están en adopción actualmente en Zaragoza.
            </p>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-5 p-2">
            <AdopVSAban />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-7 p-2 text-justify">
            <p>
              En esta gráfica se puede observar la diferencia entre el
              <b>
                {" "}
                número de animales en adopción y el número de adopciones
                realizadas
              </b>{" "}
              de entre todos los animales registrados actualmente en Zaragoza.
            </p>
          </div>
        </div>
        <div className="row align-items-center mt-5 mb-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-5 p-2 mb-5">
            <Dangerous />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-7 p-2 text-justify mb-5">
            <p>
              En esta gráfica se puede observar el
              <b>
                {" "}
                número de animales no peligros frente al número de animales
                peligros
              </b>{" "}
              que están en adopción en Zaragoza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Estatistics;
