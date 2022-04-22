import React from "react";
import { Outlet } from "react-router-dom";

function Animales() {
  return (
    <div className="animales">
      <header className="mt-5 p-5">
        <h1 className="font-weight-light text-center fw-bold">Animales</h1>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Animales;
