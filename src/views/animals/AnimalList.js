import React from "react";
import { Animal } from "../../models";

import AnimalComponent from "./components/AnimalComponent";

// Source: https://stackoverflow.com/a/58519810
function splitInGroups(arr, n) {
  return arr.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
}

function AnimalList() {
  const animals = [
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
    Animal.preview(),
  ];

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
                  id={animal.id}
                  name={animal.nombre}
                  image={animal.imagen}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="row">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AnimalList;
