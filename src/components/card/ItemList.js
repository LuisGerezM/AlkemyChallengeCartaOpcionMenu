import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ItemList = () => {
  return (
    <Card className="mt-3" style={{ width: "18rem" }}>
      <Card.Header>Nombre plato</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Imagen</ListGroup.Item>
        <ListGroup.Item>Caracteristicas</ListGroup.Item>
        <ListGroup.Item>Ver // Eliminar</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ItemList;
