import React, { useContext } from "react";
import UserBox from "./components/UserBox";
import { UserContext } from ".././environment";
import { User } from ".././models";

//TODO: valores de las variables traer de backend
var numAnimals = "250";
var numUsers = "500";
var numPost = "1500";
var numAdoptions = "30";
var numVisits = "3000";
var numTweets = "50";

// Source: https://stackoverflow.com/a/58519810
function splitInGroups(arr, n) {
  return arr.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
}

function AdminPanel() {
  let currentUser = useContext(UserContext);
  const users = [...Array(20)].map(() => User.preview());
  let table = splitInGroups(users, 3);

  return (
    <div className="home">
      <header className="px-5 pt-4">
        <h1 className="font-weight-light text-center fw-bold">
          Panel Administración
        </h1>
      </header>
      <div className="container my-4">
        <div className="row align-items-center">
          <p class="h3" style={{ color: "orange" }}>
            Analíticas
          </p>
          <div class="container">
            <div class="row gx-5 ">
              <div class="col-md-6 mt-4 mx-auto">
                <div class="p-3 border  admin-box ">
                  <b>Animales totales en adopción: </b>
                  {numAnimals}
                </div>
              </div>
              <div class="col-md-6 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Adopciones totales realizadas: </b>
                  {numAdoptions}
                </div>
              </div>
            </div>
            <div class="row gx-5">
              <div class="col-md-6 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Usuarios totales registrados: </b>
                  {numUsers}
                </div>
              </div>
              <div class="col-md-6 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Visitas a la web totales recibidas: </b>
                  {numVisits}
                </div>
              </div>
            </div>
            <div class="row gx-5">
              <div class="col-md-6 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Post totales en el foro: </b>
                  {numPost}
                </div>
              </div>
              <div class="col-md-6 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Tweets totales posteados: </b>
                  {numTweets}
                </div>
              </div>
            </div>
            <p class="h3 mt-4 pt-4" style={{ color: "orange" }}>
              Usuarios registrados
            </p>
            <div class="container mt-4 border overflow-auto">
              {table.map((row, i) => (
                <div className="row" key={i}>
                  {row.map((animal, j) => (
                    <div className="col-md-4" key={j}>
                      <UserBox user={currentUser} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
