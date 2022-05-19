import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ComunDetails from "./components/ComunDetails";
import { UserContext, TokenContext } from "../../environment";

import { getAnimalPublicDetails, getAnimalPrivateDetails } from "../../api/Api";

function AnimalDetails() {
  const [animal, setAnimal] = useState(null);
  let { idAnimal } = useParams();
  let { user: currentUser } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (!token) {
      // Obtenemos solo detalles publicos
      getAnimalPublicDetails({
        id: idAnimal,
      })
        .then((result) => {
          console.log(result);
          setAnimal(result.data);
        })
        .catch((error) => {
          console.error(error);
        });

      return;
    } else {
      getAnimalPrivateDetails({
        id: idAnimal,
      })
        .then((result) => {
          console.log(result);
          setAnimal(result.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token, idAnimal]);

  if (!animal) {
    return <></>;
  }

  return (
    <div className="animalDetails">
      <ComunDetails animal={animal} />
      <div className="row py-0">
        {!currentUser && (
          <div className="row align-items-center px-5">
            <div className="container px-5 my-0">
              <p
                className="text-center mx-5 my-2"
                style={{ backgroundColor: "orange", color: "black" }}
              >
                Para más información y detalles de adopción es necesario{" "}
                <b>
                  estar{" "}
                  <Link to="/registro" style={{ color: "black" }}>
                    registrado
                  </Link>
                </b>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimalDetails;
