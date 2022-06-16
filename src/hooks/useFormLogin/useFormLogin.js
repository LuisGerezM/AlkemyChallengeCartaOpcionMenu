import AuthUserContext from "context/userContext";
import { helpSweetAlertMsg } from "helper/helpSweetAlerts/helpSweetAlertMsg";
import { useContext, useEffect, useState } from "react";

export const useFormLogin = () => {
  const { fetchUser, readToken } = useContext(AuthUserContext);
  const [errorValidated, setErrorValidated] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [dataUser, setDataUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(
      event,
      setDataUser,
      setErrorValidated,
      setLoadingLogin,
      fetchUser,
      readToken
    );
  };

  async function fetchUserFromForm(
    dataUser,
    readToken,
    setLoadingLogin,
    fetchUser
  ) {
    const { email, password } = dataUser;
    // buscando usuario
    const checkLogin = await fetchUser({ email, password });

    if (checkLogin.token !== "error") {
      let token = checkLogin.token;
      const user = { token, email };
      readToken(user);

      // almacenando token localStorage
      window.localStorage.setItem(
        "logged-carta-opcionmenu",
        JSON.stringify(user)
      );
    } else {
      // error null o undefined
      !checkLogin &&
        helpSweetAlertMsg("error", checkLogin.error, "Oops... Error");

      // error network
      !checkLogin.error.response &&
        helpSweetAlertMsg("error", checkLogin.error.message, "Oops... Error");

      // orro error
      helpSweetAlertMsg(
        "error",
        checkLogin.error.response.data.error,
        "Oops... Error"
      );
    }
    setLoadingLogin(false);
  }

  useEffect(() => {
    dataUser &&
      fetchUserFromForm(dataUser, readToken, setLoadingLogin, fetchUser);

    return () => {
      setDataUser(null);
    };
  }, [dataUser, readToken, fetchUser]);

  async function submitForm(event) {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setErrorValidated(true);
      return;
    }

    setLoadingLogin(true);

    let email = event.target.email.value;
    let password = event.target.password.value;

    setDataUser({ email, password });
  }

  return { errorValidated, handleSubmit, loadingLogin };
};
