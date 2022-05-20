import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getStatistics } from "../../../api/Api";
import { useEffectOnce } from "usehooks-ts";

ChartJS.register(ArcElement, Tooltip, Legend);

function AnimalKinds() {
  const [kinds, setKinds] = useState(["kind"]);
  const [numKind, setNumKind] = useState([1]);
  const [bgColors, setColors] = useState(["rgba(255, 99, 132, 0.2)"]);
  const [bColor, setBColor] = useState(["rgba(255, 99, 132, 1)"]);

  //Según cuántos tipos de animales haya, asigna el id, número y color para ese tipo
  const updateKinds = (result) => {
    var k = [];
    var n = [];
    var colors = [];
    var bg = [];
    var b = [];
    for (let i = 0; i < result.length; i++) {
      k.push(result[i]._id);
      n.push(result[i].count);
      colors = random_rgba_color();
      bg.push(colors[0]);
      b.push(colors[1]);
      console.log("k: " + k + "n: " + n + " bg:" + bg + " b:" + b);
    }
    setKinds(k);
    setNumKind(n);
    setColors(bg);
    setBColor(b);
  };

  //Crea background and border color aleatorios
  function random_rgba_color() {
    var x = Math.floor(Math.random() * 256);
    var y = 100 + Math.floor(Math.random() * 256);
    var z = 50 + Math.floor(Math.random() * 256);
    var background = "rgba(" + x + "," + y + "," + z + ", 0.5)";
    var border = "rgba(" + x + "," + y + "," + z + ", 1)";
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

  const data = {
    labels: kinds,
    datasets: [
      {
        label: "Número de animales",
        data: numKind,
        backgroundColor: bgColors,
        borderColor: bColor,
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
