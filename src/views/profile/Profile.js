import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import format from "date-fns/format";

import User from "../../models/User";
import { UserContext } from "../../environment/UserProvider";

function Profile() {
  let [user, setUser] = useState(null);
  let [isSelf, setIsSelf] = useState(false);

  let currentUser = useContext(UserContext);
  let { userId } = useParams();

  useEffect(() => {
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
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <div className="profile">
      <div className="container p-2">
        <div className="row">
          <div className="col text-center p-5">
            <img className="mb-3" src={user.image} alt="" />
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
            {isSelf && (
              <div className="row text-center">
                <div className="col">
                  <button className="btn btn-danger me-2">
                    Eliminar usuario
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
