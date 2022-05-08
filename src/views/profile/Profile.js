import React, { useState, useContext } from "react";
import { useEffectOnce } from "usehooks-ts";
import { useParams } from "react-router";
import format from "date-fns/format";

import Popup from "../components/Popup";
import User from "../../models/User";
import { UserContext } from "../../environment/UserProvider";

function Profile() {
  let [user, setUser] = useState(null);
  let [isSelf, setIsSelf] = useState(false);

  let currentUser = useContext(UserContext);
  let { userId } = useParams();

  useEffectOnce(() => {
    console.debug(currentUser);

    // If no id or id is the same as the current user one
    if (!userId || (currentUser && currentUser.id === parseInt(userId))) {
      setIsSelf(true);

      // Load self user if some
      setUser(currentUser);
      return;
    }

    // TODO: api request to get user data
    setUser(User.preview());
  });

  if (!user) {
    return <></>;
  }

  return (
    <div className="profile">
      <div className="container p-2">
        <div className="row">
          <div className="col text-center p-5">
            <img
              className="mb-3 img img-responsive"
              src={user.image}
              style={{ height: "15vw", width: "15vw", objectFit: "cover" }}
              alt=""
            />
            <h2 className="mb-4">{user.name}</h2>
            <p className="text-start px-5">{user.bio}</p>
            {isSelf && (
              <button className="btn btn-danger">Cerrar sesión</button>
            )}
          </div>

          <div className="col p-5 my-auto">
            <h1 className="mb-5">Información de {user.name}</h1>
            <p>
              <b>Email:</b> {user.email}
              <br />
              <br />
              <b>Fecha de creación:</b>{" "}
              {format(user.creationDate, "dd/MM/yyyy")}
              <br />
              <br />
              <b>Mensajes:</b> {user.messagesNum}
              <br />
              <br />
            </p>
            {!isSelf && currentUser.isAdmin && (
              <div className="row text-center">
                <div className="col">
                  <Popup
                    id="popup-eliminar-usuario"
                    labelId="btn-eliminar-usuario"
                    message={"¿Quieres eliminar al usuario " + user.name + "?"}
                    action={() => console.log("test")}
                  />
                  <button
                    id="btn-eliminar-usuario"
                    className="btn btn-danger me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#popup-eliminar-usuario"
                  >
                    Eliminar usuario
                  </button>
                </div>
              </div>
            )}
            {isSelf && (
              <div className="row text-center">
                <div className="col">
                  <Popup
                    id="popup-eliminar-cuenta"
                    labelId="btn-eliminar-cuenta"
                    message={"¿Estás seguro de que quieres eliminar tu cuenta?"}
                    action={() => console.log("test")}
                  />
                  <button
                    id="btn-eliminar-cuenta"
                    className="btn btn-danger me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#popup-eliminar-cuenta"
                  >
                    Eliminar cuenta
                  </button>
                  <a className="btn btn-outline-warning" href="/editar-perfil">
                    Editar perfil
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
