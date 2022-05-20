import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getStatistics } from "../../../api/Api";

ChartJS.register(ArcElement, Tooltip, Legend);

function AdopVSAban() {
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [totalAdoptions, setTotalAdoptions] = useState(0);

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

  const nums = [totalAnimals, totalAdoptions];

  const data = {
    labels: ["Animales en adopción", "Animales adoptados"],
    datasets: [
      {
        label: "# of Votes",
        data: nums,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <Doughnut data={data} />
    </div>
  );
}
export default AdopVSAban;
