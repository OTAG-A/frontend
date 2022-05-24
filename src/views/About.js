import React from "react";

function About() {
  return (
    <div className="about">
      <header className="px-5 pt-4">
        <h1 className="font-weight-light text-center fw-bold">
          ¿Quiénes somos?
        </h1>
      </header>
      <div className="container">
        <div class="row justify-content-center mt-4 pt-3">
          <div class="col text-center">
            <img
              src="/assets/gato_persa.png"
              className="rounded-circle"
              style={{ width: 170, height: 170 }}
              alt="José Marín"
            />
            <p class="card-text mt-3 fs-4">José Marín</p>
          </div>
          <div class="col text-center">
            <img
              src="/assets/capibara.png"
              className="rounded-circle"
              style={{ width: 170, height: 170 }}
              alt="Tomás Pelayo"
            />
            <p class="card-text mt-3 fs-4">Tomás Pelayo</p>
          </div>
          <div class="col text-center">
            <img
              src="/assets/ajolote_mexicano.png"
              className="rounded-circle"
              style={{ width: 170, height: 170 }}
              alt="Andoni Salcedo"
            />
            <p class="card-text mt-3 fs-4">Andoni Salcedo</p>
          </div>
          <div class="col text-center">
            <img
              src="/assets/gato_peluche.png"
              className="rounded-circle"
              style={{ width: 170, height: 170 }}
              alt="Leticia Sánchez"
            />
            <p class="card-text mt-3 fs-4">Leticia Sánchez</p>
          </div>
          <div class="col text-center">
            <img
              src="/assets/gato_enojon.png"
              className="rounded-circle"
              style={{ width: 170, height: 170 }}
              alt="Jorge Romanos"
            />
            <p class="card-text mt-3 fs-4">Jorge Romanos</p>
          </div>
        </div>
        <div className="row align-items-center mt-5 pt-3">
          <p class="fs-5 text-center">
            Somos cinco estudiantes de Ingeniería Informática de la Universidad
            de Zaragoza. La mayoría de nosotros hemos trabajado en otros
            proyectos juntos y todos tenemos el objetivo de crecer y seguir
            aportando conocimientos a nuestra vida tanto profesional como
            personal.
          </p>
          <h1 className="font-weight-light text-center fw-bold mt-5 mb-5">
            ¿Qué hacemos?
          </h1>
          <p class="fs-5 text-center">
            Buscamos promover las adopciones de animales. Es por esto que se nos
            ocurrió la idea de realizar esta aplicación web. El propósito
            principal es ayudar a aquellas personas que quieran realizar una
            adopción en la ciudad de Zaragoza, proporcionando información sobre
            estas, y proporcionando un lugar donde comunicarte con otras
            personas que sepan sobre temas que puedan interesarte relacionados
            con las adopciones y el cuidado de los animales.
          </p>
          <h1 className="font-weight-light text-center fw-bold mt-5 mb-5">
            ¿De dónde obtenemos la información?
          </h1>
          <p class="fs-5 text-center">
            La información sobre las adopciones se obtiene de la API del
            Ayuntamiento de Zaragoza. Además, la información adicional sobre
            adopciones y cuidados de distintos animales es proporcionada por la
            comunidad que usa nuestra aplicación web. Por lo que tú mismo puedes
            contribuir a que esta información crezca cada vez más.
          </p>
          <div class="row align-items-center m-5 pb-5 ">
            <div class="col text-center mb-5">
              <img
                class="img-fluid"
                src="/assets/Ayuntamiento_de_Zaragoza.png"
                alt="Ayuntamiento de Zaragoza"
              />
            </div>

            <div class="col text-center">
              <img
                class="img-fluid"
                src="assets/logo_adoptadiCOs.png"
                alt="Logo adoptadicos"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
