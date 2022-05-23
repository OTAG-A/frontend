import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TokenContext } from "../environment/TokenProvider";
import { getInfoUser } from "../api/Api";
import { User } from "../models";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../environment/UserProvider";
import { useEffectOnce } from "usehooks-ts";

function LoginSocial() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const loc = useLocation();
  const navigate = useNavigate();

  useEffectOnce(() => {
    const accessToken = new URLSearchParams(loc.search).get("accessToken");
    console.log("acces token :" + accessToken);
    setToken(accessToken);
  });

  useEffect(() => {
    console.log(TokenContext);
    getInfoUser({})
      .then((response) => {
        console.log(response);
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
