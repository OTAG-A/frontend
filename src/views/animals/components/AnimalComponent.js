import React from "react";
import { useNavigate } from "react-router-dom";

function AnimalComponent({ id, name, image }) {
  const navigate = useNavigate();

  return (
    <div className="animal text-center p-3">
      <div
        className="clickable"
        onClick={() => navigate("/animales/" + id)}
        style={{ width: "fit-content", margin: "auto" }}
      >
        <img
          src={image ? image : "/assets/animales.png"}
          style={{ height: "25vh", width: "25vh", objectFit: "cover" }}
          alt={name}
        />
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default AnimalComponent;
