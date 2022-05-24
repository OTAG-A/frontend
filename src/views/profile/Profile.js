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

import {
  deleteUser,
  deleteSelfUser,
  getUserDetails,
  toImageUrl,
} from "../../api/Api";

function Profile() {
  let [user, setUser] = useState(null);
  let [isSelf, setIsSelf] = useState(false);

  let { user: currentUser, setUser: setContextUser } = useContext(UserContext);
  let { setToken } = useContext(TokenContext);
  let { userId } = useParams();

  const navigate = useNavigate();

  useEffectOnce(() => {
    let id = userId;
    let is_self = false;

    // No personal profile if not logged in
    if (!userId && !currentUser) {
      return;
    }

    // If no id or id is the same as the current user one
    if (!userId || (currentUser && currentUser.id === userId)) {
      setIsSelf(true);
      is_self = true;
      id = currentUser.id;

      // Load self user if some
      // setUser(currentUser);
    }

    getUserDetails({ id: id })
      .then((result) => {
        let user = User.from(result);
        setUser(user);
        if (is_self) {
          setContextUser(user);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const handleDeleteSelfAccount = () => {
    openQuestionPopup(
      "¿Estás seguro de que quieres eliminar tu cuenta?",
      () => {
        console.log("Eliminar cuenta propia");
        deleteSelfUser()
          .then((response) => {
            console.log("Eliminado");
            console.log(response);
            setToken(null);
            setContextUser(null);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            return;
          });
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
            console.log("Eliminado");
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
    setToken(null);
    setContextUser(null);
    navigate("/");

    // logoutUser()
    //   .then((response) => {
    //     // Logout satisfactorio
    //     setToken(null);
    //     setContextUser(null);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     return;
    //   });
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
              className="mb-3 img img-responsive profile-pic"
              src={
                user.avatar
                  ? toImageUrl(user.avatar)
                  : "/assets/person-circle.svg"
              }
              alt=""
            />
            <h2 className="mb-4">{user.username}</h2>
            <p className="text-start px-5 mb-5">{user.bio}</p>
            {isSelf && (
              <button className="btn btn-danger" onClick={handleLogout}>
                Cerrar sesión
              </button>
            )}
          </div>

          <div className="col p-5 my-auto  mb-5">
            <h1 className="mb-5">Información de {user.username}</h1>
            <p>
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
                    className="btn btn-danger me-2 mb-5"
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
