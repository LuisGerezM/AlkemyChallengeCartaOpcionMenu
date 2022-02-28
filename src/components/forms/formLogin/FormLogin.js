import React, { useContext, useEffect, useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import AuthUserContext from "../../../context/userContext";
import CustomButton from "../../button/CustomButton";
import SpinnerWithMsg from "../../spinner/SpinnerWithMsg";
import FormGroupInput from "./FormGroupInput";
import submitForm from "helper/login/formLogin/submitForm";
import fetchUserFromForm from "helper/login/formLogin/fetchUserFormForm";

const FormLogin = () => {
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

  useEffect(() => {
    dataUser &&
      fetchUserFromForm(dataUser, readToken, setLoadingLogin, fetchUser);

    return () => {
      setDataUser(null);
    };
  }, [dataUser, readToken, fetchUser]);

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
