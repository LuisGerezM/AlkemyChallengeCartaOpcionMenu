import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ScoreAverageAndAcumulations = ({ infoScoreMenu }) => {
  const { accumulatePriceMenu, averagePrepTime, averageHealtScore } =
    infoScoreMenu;
  return (
    <Card bg="secondary" text="white" style={{ width: "90%" }} className="mt-2">
      <Card.Header className="fw-bolder">Información del menú:</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={3}><span className="fw-bolder">Precio menu:</span> ${accumulatePriceMenu}.</Col>
          <Col><span className="fw-bolder">Tiempo promedio preparación del menu:</span> {averagePrepTime} Min.</Col>
          <Col><span className="fw-bolder">promedio 'healt score':</span> {averageHealtScore}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ScoreAverageAndAcumulations;
