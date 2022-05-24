import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffectOnce } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel } from "react-bootstrap";

import { ListAnimal } from "../../models";
import AnimalComponent from "./components/AnimalComponent";

import { getAnimals, getSpecies } from "../../api/Api";

import { Pagination } from "react-bootstrap";

// Source: https://stackoverflow.com/a/58519810
function splitInGroups(arr, n) {
  return arr.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
}

function usePrevious(value) {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function AnimalList() {
  const navigate = useNavigate();

  const [animals, setAnimals] = useState([]);
  const [totalAnimals, setTotalAnimals] = useState(0);

  const [species, setSpecies] = useState([]);
  const [filterSpecie, setFilterSpecie] = useState("");
  const [filterBreed, setFilterBreed] = useState("");

  const animalsPerPage = 9;

  const loc = useLocation();

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    let firstLetter = str.charAt(0);
    return firstLetter.toUpperCase() + lower.slice(1);
  };

  const getNumPages = () => {
    if (animalsPerPage === 0) {
      return 1;
    }
    let pages = Math.ceil(totalAnimals / animalsPerPage);
    if (pages <= 0) {
      return 1;
    }
    return pages;
  };

  const fetchAnimals = () => {
    const pag = pagina || 1;
    console.log("`" + (filterBreed ? filterBreed : null) + "`");
    getAnimals({
      starts: (pag - 1) * animalsPerPage,
      rows: animalsPerPage,
      specie: filterSpecie || null,
      breed: filterBreed ? filterBreed.toUpperCase() : null,
    })
      .then((result) => {
        console.log("res", result);
        setTotalAnimals(result.data.total);
        let animal_list = result.data.pets.map((animal) =>
          ListAnimal.from(animal)
        );
        setAnimals(animal_list);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Obtenemos la pagina de los parametros de url
  const paginaParam =
    parseInt(new URLSearchParams(loc.search).get("pagina")) || 1;
  const pagina = Math.max(1, Math.min(getNumPages(), paginaParam));

  useEffectOnce(() => {
    fetchAnimals();
  });

  const previousFilterBreed = usePrevious(filterBreed);
  // useEffect with cooldown for quick typers
  useEffect(() => {
    // Only query if changed
    if (filterBreed === previousFilterBreed) {
      return;
    }
    const timer = setTimeout(() => {
      fetchAnimals();
    }, 500);

    return () => clearTimeout(timer);
  }, [filterBreed]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchAnimals();
  }, [animalsPerPage, totalAnimals, pagina, filterSpecie]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffectOnce(() => {
    getSpecies()
      .then((result) => {
        let result_species = result.data.map((specie) =>
          capitalize(specie._id)
        );
        setSpecies(result_species);
      })
      .then((error) => {});
  });

  const gotoPage = (page) => {
    navigate({
      pathname: "/animales",
      search: "?pagina=" + page,
    });
  };

  let table = splitInGroups(animals, 3);
  console.log(table);

  return (
    <div className="home">
      <header className="mt-5 p-5">
        <div className="row">
          <div className="col-sm-3">
            <FloatingLabel
              className="mb-3"
              controlId="floatingSelect"
              label="Especie"
            >
              <Form.Select
                required
                aria-label="Especie"
                value={filterSpecie}
                onChange={(e) => {
                  setFilterSpecie(e.target.value);
                  gotoPage(1);
                }}
              >
                <option value="">Cualquier especie</option>
                {species.map((specie, i) => (
                  <option value={specie.toUpperCase()} key={i}>
                    {specie}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="col-sm-9">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Buscar por raza"
            >
              <Form.Control
                type="text"
                placeholder="Buscar por raza"
                value={filterBreed}
                onInput={(e) => {
                  setFilterBreed(e.target.value);
                  gotoPage(1);
                }}
              />
            </FloatingLabel>
          </div>
        </div>
      </header>
      <div className="container">
        {table.map((row, i) => (
          <div className="row" key={i}>
            {row.map((animal, j) => (
              <div className="col-md-4" key={j}>
                <AnimalComponent
                  id={animal.id}
                  name={animal.name}
                  image={animal.photo}
                />
              </div>
            ))}
          </div>
        ))}

        <div className="row mb-5">
          <Pagination className="justify-content-end mb-5">
            <Pagination.First onClick={() => gotoPage(1)} />
            {pagina - 3 > 0 && <Pagination.Ellipsis />}

            {pagina - 2 > 0 && (
              <Pagination.Item onClick={() => gotoPage(pagina - 2)}>
                {pagina - 2}
              </Pagination.Item>
            )}
            {pagina - 1 > 0 && (
              <Pagination.Item onClick={() => gotoPage(pagina - 1)}>
                {pagina - 1}
              </Pagination.Item>
            )}
            <Pagination.Item active>{pagina}</Pagination.Item>
            {pagina + 1 <= getNumPages() && (
              <Pagination.Item onClick={() => gotoPage(pagina + 1)}>
                {pagina + 1}
              </Pagination.Item>
            )}
            {pagina + 2 <= getNumPages() && (
              <Pagination.Item onClick={() => gotoPage(pagina + 2)}>
                {pagina + 2}
              </Pagination.Item>
            )}

            {pagina + 3 <= getNumPages() && <Pagination.Ellipsis />}

            <Pagination.Last onClick={() => gotoPage(getNumPages())} />
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default AnimalList;
