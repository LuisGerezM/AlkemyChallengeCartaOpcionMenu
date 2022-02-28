import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "assets/img/404-error.png";
import warning from "assets/img/warning.png";
import "./styles.css";

const index = () => {
  return (
    <Card>
      <Card.Header>Mensaje 404!!</Card.Header>
      <Card.Body>
        <Card.Title className="fs-2">Lo sentimos...</Card.Title>
        <Col>
          <Card.Text className="text-center">
            <Image src={warning} />
            <Image src={notFound} />
          </Card.Text>
        </Col>
        <Card.Text className="text-center fs-4">
          Página no encontrada!!
        </Card.Text>
        <Card.Footer className="d-flex justify-content-center">
          <Button
            className="text-center w-75"
            as={Link}
            variant="primary"
            to="/login"
            size="lg"
          >
            Aceptar
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default index;
