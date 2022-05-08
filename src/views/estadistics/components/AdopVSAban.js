import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function AdopVSAban() {
  //TODO: información API
  const nums = [150, 20];

  const data = {
    labels: ["Animales en adopción", "Animales adoptados"],
    datasets: [
      {
        label: "# of Votes",
        data: nums,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
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
