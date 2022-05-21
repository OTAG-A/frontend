import React, { useState, useContext } from "react";
import { useEffectOnce } from "usehooks-ts";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import { Link } from "react-router-dom";

import { openQuestionPopup } from "../components/PopupQuestion";
import User from "../../models/User";
import { UserContext } from "../../environment/UserProvider";
import { TokenContext } from "../../environment/TokenProvider";

import { logoutUser, deleteUser } from "../../api/Api";

function Profile() {
  let [user, setUser] = useState(null);
  let [isSelf, setIsSelf] = useState(false);

  let { user: currentUser, setUser: setContextUser } = useContext(UserContext);
  let { setToken } = useContext(TokenContext);
  let { userId } = useParams();

  const navigate = useNavigate();

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

  const handleDeleteSelfAccount = () => {
    openQuestionPopup(
      "¿Estás seguro de que quieres eliminar tu cuenta?",
      () => {
        console.log("Eliminar cuenta propia");
      }
    );
  };

  const handleDeleteOtherAccount = (user) => {
    console.log("Eliminar cuenta del usuario con id: " + userId);
    openQuestionPopup(
      "¿Quieres eliminar al usuario " + user.username + "?",
      () => {
        deleteUser(userId)
          .then((response) => {
            console.log(response);
            navigate("/admin");
          })
          .catch((error) => {
            console.log(error);
            return;
          });
      }
    );
  };

  const handleLogout = () => {
    logoutUser()
      .then((response) => {
        console.log(response);
        // Logout satisfactorio
        setToken(null);
        setContextUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  if (!user) {
    return <></>;
  }

  console.debug(currentUser);

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
            <h2 className="mb-4">{user.username}</h2>
            <p className="text-start px-5">{user.bio}</p>
            {isSelf && (
              <button className="btn btn-danger" onClick={handleLogout}>
                Cerrar sesión
              </button>
            )}
          </div>

          <div className="col p-5 my-auto">
            <h1 className="mb-5">Información de {user.username}</h1>
            <p>
              <b>Email:</b> {user.email}
              <br />
              <br />
              <b>Fecha de creación:</b>{" "}
              {moment(user.createdAt).format("DD-MM-YYYY")}
              <br />
              <br />
              <b>Mensajes:</b> {user.messagesNum}
              <br />
              <br />
            </p>
            {!isSelf && currentUser && currentUser.isAdmin && (
              <div className="row text-center">
                <div className="col">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDeleteOtherAccount(user)}
                  >
                    Eliminar usuario
                  </button>
                </div>
              </div>
            )}
            {isSelf && (
              <div className="row text-center">
                <div className="col">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDeleteSelfAccount(user)}
                  >
                    Eliminar cuenta
                  </button>
                  <Link to="/editar-perfil" className="btn btn-outline-warning">
                    Editar perfil
                  </Link>
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
