import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="mt-0 px-5 pb-0 pt-3">
        <h1 className="font-weight-light text-center fw-bold">adoptadiCOs</h1>
      </header>
      <div className="container p-4">
        <div className="row align-items-center mb-5">
          <p class="fs-5 text-center">
            ¡Has llegado a <span style={{ color: "orange" }}>adoptadiCOs</span>!{" "}
            <br></br> El servicio de información sobre adopción de animales en
            la ciudad de Zaragoza.
          </p>
          <div class="row justify-content-center my-4">
            <div
              class="col card m-4"
              style={{ width: "40%", borderColor: "orange" }}
            >
              <div class="card-body text-center">
                <h5 class="card-title" style={{ color: "orange" }}>
                  ¿Estás pensando en adoptar?
                </h5>
                <div className="container my-3">
                  <p class="card-text">
                    Echa un vistazo a los distintos tipos de animales que
                    necesitan un hogar en Zaragoza y ayudales a ser felices
                  </p>
                </div>
                <div className="container ">
                  <button
                    class="btn btn-primary"
                    onClick={() => navigate("/animales")}
                  >
                    Animales en adopción
                  </button>
                </div>
              </div>
            </div>
            <div
              class="col card m-4"
              style={{ width: "40%", borderColor: "orange" }}
            >
              <div class="card-body text-center">
                <h5 class="card-title" style={{ color: "orange" }}>
                  ¿Tienes dudas sobre los animales?
                </h5>
                <div className="container my-3">
                  <p class="card-text">
                    Resuleve tus dudas sobre adopción o sobre los cuidados de
                    ciertos animales en el Foro o resuelve las de los demás
                  </p>
                </div>
                <div className="container my-1">
                  <button
                    class="btn btn-primary"
                    onClick={() => navigate("/foro")}
                  >
                    Comunidad adoptadiCOs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p class="fs-5 m-2 text-center">
            Gracias a <span style={{ color: "orange" }}>adoptadiCOs </span>
            puedes:
          </p>
          <div class=" fs-5 row justify-content-center my-4">
            <div class="col">
              <ul>
                <li>Saber qué animales están en adopción en Zaragoza</li>
                <br></br>
                <li>
                  Tener información sobre estos animales y cómo realizar la
                  adopción
                </li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li>
                  Resolver tus dudas sobre adopciones y/o cuidados de distintos
                  animales
                </li>
                <li>
                  Resolver las dudas de otros usuarios sobre adopciones y/o
                  cuidados de distintos animales
                </li>
              </ul>
            </div>
          </div>

          <p class="fs-5 my-4 text-center">
            El abandono de animales en España está lamentablemente extendido.{" "}
            <br></br>
            Gran parte de estos animales son perros y gatos de distintas razas.
            <br></br>
            Con tu ayuda podemos hacer que los animales de Zaragoza que
            necesitan un hogar lo tengan.
          </p>
          <p class="fs-2 text-center">
            <span style={{ color: "orange" }}>ADOPTA, NO COMPRES </span>
          </p>
          <div class=" fs-5 row justify-content-center my-4">
            <div class="col ">
              <p>
                Síguenos en nuestra cuenta de Twitter.
                <br></br>
                <br></br>Puedes encontrar información sobre las adopciones que
                se realizan.
                <br></br>
                <br></br>A parte de utilizar nuestro foro, las redes sociales
                son un buen luegar para encontrar información adicional, y
                comunicarte con personas con los mismos intereses{" "}
              </p>
            </div>
            <div class="col ">Columna 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
