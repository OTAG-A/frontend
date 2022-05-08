import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function AnimalKinds() {
  //TODO: información API
  const kinds = ["Perros", "Gatos", "Hamsters", "Caballos", "Pájaros"];
  const numAnimals = [12, 19, 3, 5, 2];

  const data = {
    labels: kinds,
    datasets: [
      {
        label: "Número de animales",
        data: numAnimals,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
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
