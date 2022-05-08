import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function Dangerous() {
  //TODO: información API
  const nums = [25, 50];

  const data = {
    labels: ["Animales peligrosos", "Animales no peligrosos"],
    datasets: [
      {
        label: "Animales peligrosos vs no peligrosos",
        data: nums,
        backgroundColor: ["rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="container">
      <PolarArea data={data} />
    </div>
  );
}
export default Dangerous;
