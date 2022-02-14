import React, { useEffect, useState } from "react";
import methodsApi from "../../server/axios";
import AuthUserContext from "./index";

const UserProvider = ({ children }) => {
  const [tokenUser, setTokenUser] = useState(null);
  const [emailUser, setEmailUser] = useState("");

    // chequemos existencia de token de usuario en local storage, si existe lo almacenamos en tokenUser
    useEffect(() => {
        const userToken = window.localStorage.getItem("logged-carta-opcionmenu");
        console.log('user JSON', userToken)
        if (userToken) {
          const user = JSON.parse(userToken);
          readToken(user);
        }
      }, []);

  // funcion para leer el token de inicio
  const readToken = (dataUser) => {
    console.log("dataUser", dataUser);
    setTokenUser(dataUser.token);
    setEmailUser(dataUser.email);
  };

  const fetchUser = async (user) => {
    // console.log('user2', user)
    try {
      const fetchUser = await methodsApi.getUser(user);
      console.log("fetchUser user provier", fetchUser);

      if (fetchUser.status === 200) return fetchUser.data;

      throw new Error("Vaya ocurrió un error inesperado");
    } catch (error) {
      return { token: "error", error };
    }
  };

  return (
    <AuthUserContext.Provider
      value={{ fetchUser, readToken, tokenUser, emailUser }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default UserProvider;
