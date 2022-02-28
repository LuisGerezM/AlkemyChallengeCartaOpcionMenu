import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/forms/formLogin/FormLogin";
import AuthUserContext from "../context/userContext";
import "./styles.css";

const Login = () => {
  const { tokenUser } = useContext(AuthUserContext);

  let navigate = useNavigate();

  useEffect(() => {
    tokenUser && navigate("/lista-platos");
  }, [tokenUser, navigate]);

  return (
    <Container className="cointainer-login ">
      <Row className="mt-5">
        <Col
          className="card-login shadow-lg my-1 p-5 mt-5  "
          md={{ span: 6, offset: 3 }}
        >
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
