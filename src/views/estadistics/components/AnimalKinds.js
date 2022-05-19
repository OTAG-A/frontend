import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getStatistics } from "../../../api/Api";

ChartJS.register(ArcElement, Tooltip, Legend);

function AnimalKinds() {
  const [dogs, setDogs] = useState(0);
  const [cats, setCats] = useState(0);
  const [others, setOthers] = useState(0);

  useEffect(() => {
    console.debug("Fetching tipos y cantidad de animales");

    getStatistics()
      .then((result) => {
        console.log(
          "Perros: " + dogs + "\nGatos: " + cats + "\nOtros: " + others
        );
        setDogs(result[1].dogs_adopted);
        setCats(result[1].cats_adopted);
        setOthers(result[1].others);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //TODO: información API - esta no es la info y sino  no sale gráfica con todo ceros
  const kinds = ["Gatos", "Perros", "Otros"];
  //const numAnimals = [cats, dogs, others];
  const numAnimals = [10, 5, 2];

  const data = {
    labels: kinds,
    datasets: [
      {
        label: "Número de animales",
        data: numAnimals,
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <Pie data={data} />
    </div>
  );
}
export default AnimalKinds;
