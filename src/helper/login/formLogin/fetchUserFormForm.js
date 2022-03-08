import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";

export default async function fetchUserFromForm(
  dataUser,
  readToken,
  setLoadingLogin,
  fetchUser
) {
  try {
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
      !checkLogin && sweetAlertMsg("error", checkLogin.error, "Oops... Error");

      // error network
      !checkLogin.error.response &&
        sweetAlertMsg("error", checkLogin.error.message, "Oops... Error");

      // otro error
      sweetAlertMsg(
        "error",
        checkLogin.error.response.data.error,
        "Oops... Error"
      );
    }
  } catch (error) {
    // error protocol
    sweetAlertMsg(
      "error",
      "Ocurrió un error inesperado, ponte en contacto con el administrador",
      "Oops... Error"
    );
  } finally {
    setLoadingLogin(false);
  }
}
