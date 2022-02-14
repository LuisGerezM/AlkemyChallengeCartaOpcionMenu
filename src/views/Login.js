import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "../components/forms/formLogin/FormLogin";
import "./styles.css";

const Login = () => {
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
