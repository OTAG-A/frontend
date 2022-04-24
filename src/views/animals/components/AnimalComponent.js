import React from "react";
import { useNavigate } from "react-router-dom";

function AnimalComponent({ id, name, image }) {
  const navigate = useNavigate();

  return (
    <div className="animal text-center p-3" onClick={() => navigate('/animales/' + id)}>
      <img src={image} />
      <h2>{name}</h2>
    </div>
  );
}

export default AnimalComponent;
