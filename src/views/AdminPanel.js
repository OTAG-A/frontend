import React, { useEffect, useState } from "react";
import UserBox from "./components/UserBox";
import { ListUser, User } from "./../models";
import {
  getStatistics,
  getNumberForums,
  getNumberReplies,
  getBestCategory,
  getUsers,
} from "../api/Api";
import { set } from "date-fns";
import { useEffectOnce } from "usehooks-ts";

//TODO: valores de las variables traer de backend
var numUsers = "500";

// Source: https://stackoverflow.com/a/58519810
function splitInGroups(arr, n) {
  return arr.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
}

function AdminPanel() {
  //Analíticas
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [totalAdoptions, setTotalAdoptions] = useState(0);
  const [numberForums, setNumberForums] = useState(0);
  const [numberReplies, setNumberReplies] = useState(0);
  const [bestCategory, setBestCategory] = useState("");
  //Usuarios totales registrados -> al coger users length

  useEffect(() => {
    console.debug("Fetching total de animales y adopciones");

    getStatistics()
      .then((result) => {
        console.log(
          "Animales en adopcion: " +
            totalAnimals +
            "\nAnimales adoptados: " +
            totalAdoptions
        );
        setTotalAnimals(result[2].animals_in_adoption);
        setTotalAdoptions(result[2].total_adoptions);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //Analiticas foro
  useEffect(() => {
    console.debug("Fetching número total posts");

    getNumberForums()
      .then((result) => {
        console.log("number forums: " + result.data);
        setNumberForums(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    console.debug("Fetching número total respuestas");

    getNumberReplies()
      .then((result) => {
        console.log("number replies: " + result.data);
        setNumberReplies(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //TODO: no funciona, esperar a que backend lo arregle
  useEffect(() => {
    console.debug("Fetching mejor categoría del foro");

    getBestCategory()
      .then((result) => {
        console.log("best category: " + result.data);
        console.log("best category: " + result);
        setBestCategory(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //TODO: users todos los de bbdd
  const users = [...Array(20)].map(() => User.preview());
  //const [users, setUsers] = useState([]);
  let table = splitInGroups(users, 4);

  useEffect(() => {
    console.debug("Fetching usuarios");

    getUsers()
      .then((result) => {
        console.log("users: " + result);
        console.log("número de usuarios: " + result.length);
        //let users_list = result.data.map((users) => ListUser.from(users));
        //setUsers(users_list);
        //console.log("usuarios en lista" + users_list);
      })
      .catch((error) => {
        console.error(error);
      });
  });

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
          <div class="container px-4">
            <div class="row gx-5 ">
              <div class="col-md-6 col-sm-10 mt-4 mx-auto">
                <div class="p-3 border admin-box ">
                  <b>Animales totales en adopción: </b>
                  {totalAnimals}
                </div>
              </div>
              <div class="col-md-6 col-sm-10 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Adopciones totales realizadas: </b>
                  {totalAdoptions}
                </div>
              </div>
            </div>
            <div class="row gx-5">
              <div class="col-md-6 col-sm-10 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Usuarios totales registrados: </b>
                  {numUsers}
                </div>
              </div>
              <div class="col-md-6 col-sm-10 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Respuestas en el foro totales recibidas: </b>
                  {numberReplies}
                </div>
              </div>
            </div>
            <div class="row gx-5">
              <div class="col-md-6 col-sm-10 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Post totales en el foro: </b>
                  {numberForums}
                </div>
              </div>
              <div class="col-md-6 col-sm-10 mt-4 mx-auto">
                <div class="p-3 border admin-box">
                  <b>Mejor categoría del foro: </b>
                  {bestCategory}
                </div>
              </div>
            </div>
          </div>
          <div className="container my-4">
            <div className="row align-items-center">
              <p class="h3 pt-4" style={{ color: "orange" }}>
                Usuarios registrados
              </p>
              <div class="container px-4 mt-4 vh-50">
                <div class="border users-box">
                  {table.map((row, i) => (
                    <div className="row" key={i}>
                      {row.map((user, j) => (
                        <div className="col-md-3" key={j}>
                          <UserBox
                            id={user.id}
                            name={user.username}
                            image={user.image}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
