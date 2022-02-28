import DetailItemSelected from "components/card/DetailItemSelected";
import React from "react";
import { Col } from "react-bootstrap";

const DetallePlato = () => {
  return (
    <Col className="d-flex justify-content-center">
      <DetailItemSelected from="detalle" />
    </Col>
  );
};

export default DetallePlato;
