import React, { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { getStatistics } from "../../../api/Api";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function Dangerous() {
  const [gangerous, setDangerous] = useState(0);
  const [notDangerous, setNotDangerous] = useState(0);

  useEffectOnce(() => {
    console.debug("Fetching número animales peligrosos y no peligrosos");

    getStatistics()
      .then((result) => {
        console.log(
          "Animales peligrosos: " +
          gangerous +
          "\nAnimales no peligrosos: " +
          notDangerous
        );
        setDangerous(result[3].dangerous);
        setNotDangerous(result[3].not_dangerous);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const nums = [gangerous, notDangerous];

  const data = {
    labels: ["Animales peligrosos", "Animales no peligrosos"],
    datasets: [
      {
        label: "Animales peligrosos vs no peligrosos",
        data: nums,
        backgroundColor: ["rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
        borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
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
