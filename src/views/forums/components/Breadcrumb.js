import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function total_path(pathSlices, idx) {
  let path = "/";
  for (let i = 0; i <= idx; i++) {
    path += pathSlices[i] + "/";
  }
  return path;
}

function capitalize(str) {
  if (str.length < 1) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Breadcrumb = () => {
  const route = useLocation()
    .pathname.split("/")
    .filter((pathSlice) => pathSlice !== "");
  console.log(route);

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Inicio</Link>
        </li>

        {route.map((pathSlice, i) => {
          const isActive = i === route.length - 1;

          return isActive ? (
            <li key={i} className="breadcrumb-item active">
              {capitalize(pathSlice)}
            </li>
          ) : (
            <li key={i} className="breadcrumb-item">
              <Link to={total_path(route, i)}>{capitalize(pathSlice)} </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
