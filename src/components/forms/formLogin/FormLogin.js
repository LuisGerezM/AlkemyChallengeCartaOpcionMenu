import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import CustomButton from "../../button/CustomButton";
import SpinnerWithMsg from "../../spinner/SpinnerWithMsg";
import FormGroupInput from "./FormGroupInput";
import { useFormLogin } from "hooks/useFormLogin/useFormLogin";

const FormLogin = () => {
  const { errorValidated, handleSubmit, loadingLogin } = useFormLogin();

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
