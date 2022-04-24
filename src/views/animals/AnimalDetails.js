import React, { useEffect } from "react";
import { useParams } from "react-router";

function AnimalDetails() {
  let { idAnimal } = useParams();

  useEffect(() => {
    // TODO: Obtener detalles de animal de la API dado su ID
  }, [idAnimal]);

  return (
    <div className="home">
      <header className="mt-5 p-5">
        <h1 className="font-weight-light text-center fw-bold">
          Animal {idAnimal}
        </h1>
      </header>
      <div className="container">
        <div className="row align-items-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimalDetails;
