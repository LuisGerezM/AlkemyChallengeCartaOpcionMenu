import React, { useContext, useEffect, useRef, useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthUserContext from "../../../context/userContext";
import CustomButton from "../../button/CustomButton";
import SpinnerWithMsg from "../../spinner/SpinnerWithMsg";
// import SweetAlerts from "../../sweetAlerts/SweetAlert";
import FormGroupInput from "./FormGroupInput";
import { sweetAlertMsg } from "../../../helper/sweetAlerts/sweetAlertMsg";

const FormLogin = () => {
  const { fetchUser, readToken } = useContext(AuthUserContext);
  const [errorValidated, setErrorValidated] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  // DSPUES VER SI PRUEBO PONER EN UN EFFECT EL LLAMADO ASINCRONO PARA Q NO ME TIRE EL WARNING
  //const [inputsForm, setInputsForm] = useState({})

  const isMounted = useRef(null);

  // const navigate = useNavigate();

  // ESTE " Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function " Me sale por que axios usa hace una llamada asincrona, entoncs debo desmontar el componente, esto lo logro generando una referencia con el useRef ;;
  // RECURSO: https://stackoverflow.com/questions/56584107/cancel-all-subscriptions-in-a-useeffect-cleanup-function-created-by-context-cons
  useEffect(() => {
    // console.log('tokenUser', tokenUser)
    // tokenUser && navigate("/");

    // ejecutado cuando se monta el componente
    isMounted.current = true;
    return () => {
      // ejecutado cuándo se desmonta; para evitar error de subsripcion asincrona
      // console.log("isMounted.current desmontando", isMounted.current);
      // este setLoadingLogin tengo que ponerlo AQUI, ya que cuando todo va bien y guardo el token usando la fcion radToken, entonces el componente Login.js que tiene un efecto que redirecciona a home cada vez que cambie la variable token, me manda directamente al home. Por tanto donde estaba antes, linea 82, no se llegaba a ejecutar debido a que el componente ya estaba demontado. Usando esta REFERENCIA puedo decirle que me lo demonte, y soluciono el error "To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function" .... Recurso: https://stackoverflow.com/questions/59209337/react-axios-request-asks-for-useeffect-cleanup-function-to-cancel-all-subscripti?rq=1
      setLoadingLogin(false);
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setErrorValidated(true);
      return;
    }
    // challenge@alkemy.org
    //react
    setLoadingLogin(true);
    //llamada API
    let email = event.target.email.value;
    let password = event.target.password.value;

    // setInputsForm({email, password})

    const checkLogin = await fetchUser({ email, password });

    if (checkLogin.token !== "error") {
      // console.log("checkLogin !== error", checkLogin);
      let token = checkLogin.token;
      const user = { token, email };
      readToken(user);

      window.localStorage.setItem(
        "logged-carta-opcionmenu",
        JSON.stringify(user)
      );

      //navigate("/");
    } else {
      // AQUI DISPARAR un sweet alert con el mismo
      // console.log("checkLogin === error", checkLogin);

      // error network
      !checkLogin.error.response && sweetAlertMsg('error', checkLogin.error.message, "Oops... Error");

      // other error
      sweetAlertMsg('error', checkLogin.error.response.data.error, "Oops... Error");
    }
    setLoadingLogin(false);
  };

  // challenge@alkemy.org
  // react
  
  return (
    <Form noValidate validated={errorValidated} onSubmit={handleSubmit}>
      <FormGroupInput
        labelText={"Email"}
        name={"email"}
        type={"email"}
        placeholder={"Ingrese su Email"}
        msgError={"Por favor ingresa un correo válido"}
      />
      <FormGroupInput
        labelText={"Password"}
        name={"password"}
        type={"password"}
        placeholder={"Ingrese Contraseña"}
        msgError={"Por favor ingresa una contraseña válida"}
      />
      <Row>
        <Col className="d-flex justify-content-center mt-3" md={12}>
          <CustomButton
            type="submit"
            text="Enviar"
            disabledBtn={loadingLogin}
          />
        </Col>
        <Col className="d-flex justify-content-center mt-4" md={12}>
          {loadingLogin && <SpinnerWithMsg msg={"Cargando..."} />}
        </Col>
      </Row>
    </Form>
  );
};

export default FormLogin;
