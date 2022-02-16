import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import FormLogin from "../components/forms/formLogin/FormLogin";
import AuthUserContext from "../context/userContext";
import "./styles.css";

const Login = () => {
  const { tokenUser } = useContext(AuthUserContext);

  let navigate = useNavigate();

  useEffect(() => {
    // console.log('tokenUser Login.js', tokenUser)
    tokenUser && navigate("/");

    return () => {
      // console.log('desmontando effect Login.js')
    };
  }, [tokenUser]);

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
