import React, { useEffect, useState } from "react";
import methodsApi from "../../server/axios";
import AuthUserContext from "./index";

const UserProvider = ({ children }) => {
  const [tokenUser, setTokenUser] = useState(null);
  const [emailUser, setEmailUser] = useState("");

  // check token usuario local storage
  useEffect(() => {
    const userToken = window.localStorage.getItem("logged-carta-opcionmenu");

    if (userToken) {
      // existe, almacenamos en estado
      const user = JSON.parse(userToken);
      readToken(user);
    }
  }, []);

  // lee token
  const readToken = (dataUser) => {
    setTokenUser(dataUser.token);
    setEmailUser(dataUser.email);
  };

  const fetchUser = async (user) => {
    try {
      const fetchUser = await methodsApi.getUser(user);
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
