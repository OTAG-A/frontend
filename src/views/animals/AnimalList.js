import React, { useState } from "react";
import { useEffectOnce } from "usehooks-ts";

import { ListAnimal } from "../../models";
import AnimalComponent from "./components/AnimalComponent";

import { getAnimals } from "../../api/Api";

// Source: https://stackoverflow.com/a/58519810
function splitInGroups(arr, n) {
  return arr.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
}

function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffectOnce(() => {
    console.debug("fetching animal list");

    getAnimals({
      starts: 0,
      rows: 1,
    })
      .then((result) => {
        console.log(result);
        let animal_list = result.data.map((animal) => ListAnimal.from(animal));
        console.log("list: ", animal_list);
        setAnimals(animal_list);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  let table = splitInGroups(animals, 3);
  console.log(table);

  return (
    <div className="home">
      <header className="mt-5 p-5">
        <input
          type={"text"}
          placeholder="Buscar animal"
          className="w-100 p-2"
        />
      </header>
      <div className="container">
        {table.map((row, i) => (
          <div className="row" key={i}>
            {row.map((animal, j) => (
              <div className="col-md-4" key={j}>
                <AnimalComponent
                  id={animal._id}
                  name={animal.name}
                  image={animal.photo}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="row">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <button className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {[...Array(3)].map((_, i) => (
              <li className="page-item" key={i}>
                <button className="page-link">{i + 1}</button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnimalList;
