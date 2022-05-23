import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TokenContext } from "../environment/TokenProvider";
import { getInfoUser, baseUrl } from "../api/Api";
import { User } from "../models";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../environment/UserProvider";
import { useEffectOnce } from "usehooks-ts";

function LoginSocial() {
  const { setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);
  const loc = useLocation();
  const navigate = useNavigate();

  useEffectOnce(() => {
    const accessToken = new URLSearchParams(loc.search).get("accessToken");
    console.log("acces token :" + accessToken);
    setToken(accessToken);
  });

  useEffect(() => {
    if (!token) return;

    console.log(token);

    getInfoUser(token)
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
  }, [token]);

  /* useEffect(() => {
    const accessToken = new URLSearchParams(loc.search).get("accessToken");
    console.log("acces token :" + accessToken);
    let requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    // Añadimos el token de sesión a la petición si estamos loggeados
    requestOptions.headers["Authorization"] = "Bearer " + accessToken;

    fetch(baseUrl + "/users/info/me", requestOptions).then(async (response) => {
      if (response.ok) {
        console.log(await response.json());
        // Parseamos el usuario
        let user = User.from(response);
        console.log(user);
        setUser(user);
        setToken(accessToken);

        navigate("/");
      } else {
        console.log(await response.json());
      }
    }); 
  });*/

  return <></>;
}

export default LoginSocial;
