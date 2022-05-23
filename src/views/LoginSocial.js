import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TokenContext } from "../environment/TokenProvider";
import { getInfoUser } from "../api/Api";
import { User } from "../models";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../environment/UserProvider";

function LoginSocial() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const loc = useLocation();
  const navigate = useNavigate();
  const accessToken = new URLSearchParams(loc.search).get("accessToken");
  console.log("acces token :" + accessToken);
  useEffect(() => {
    setToken(accessToken);
    getInfoUser({})
      .then((response) => {
        console.log(response);
        // Guardamos el token
        console.log(response.accessToken);
        setToken(response.accessToken);
        // Eliminamos el token para no añadirlo al usuario
        delete response.accessToken;

        // Parseamos el usuario
        let user = User.from(response);
        console.log(user);
        setUser(user);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  });

  return <></>;
}

export default LoginSocial;
