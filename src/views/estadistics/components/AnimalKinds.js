import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getStatistics } from "../../../api/Api";
import { useEffectOnce } from "usehooks-ts";

ChartJS.register(ArcElement, Tooltip, Legend);

function AnimalKinds() {
  const [chartData, setChartData] = useState(null);

  //Según cuántos tipos de animales haya, asigna el id, número y color para ese tipo
  const updateKinds = (result) => {
    var k = [];
    var n = [];
    var colors = [];
    var bg = [];
    var b = [];
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      k.push(result[i]._id);
      n.push(result[i].count);
      colors = random_rgba_color();
      bg.push(colors[0]);
      b.push(colors[1]);
      console.log("k: ", k, "n: ", n, " bg:", bg, " b:", b);
    }

    setChartData({
      labels: k,
      datasets: [
        {
          label: "Número de animales",
          data: n,
          backgroundColor: bg,
          hoverBackgroundColor: bg,
          borderColor: b,
          hoverBorderColor: b,
          borderWidth: 1,
        },
      ],
    });
  };

  //Crea background and border color aleatorios
  function random_rgba_color() {
    let r = Math.floor(Math.random() * 256);
    let g = 100 + Math.floor(Math.random() * 256);
    let b = 50 + Math.floor(Math.random() * 256);
    let background = "rgba(" + r + "," + g + "," + b + ", 1)";
    // https://gist.github.com/p01/1005192?permalink_comment_id=1783655#gistcomment-1783655
    const n = -80;
    let [rb, gb, bb] = [r, g, b].map(d => (d += n) < 0 ? 0 : d > 255 ? 255 : d | 0)
    var border = "rgba(" + rb + "," + gb + "," + bb + ", 1)";
    return [background, border];
  }

  useEffectOnce(() => {
    console.debug("Fetching tipos y cantidad de animales");

    getStatistics()
      .then((result) => {
        console.log(result[1]);
        updateKinds(result[1]);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="container">
      {chartData &&
        <Pie data={chartData} />
      }
    </div>
  );
}
export default AnimalKinds;
