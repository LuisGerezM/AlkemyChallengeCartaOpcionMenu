import React from "react";
import { Card, Col } from "react-bootstrap";

const ScoreAverageAndAcumulations = ({ infoScoreMenu }) => {
  const { accumulatePriceMenu, averagePrepTime, averageHealtScore } =
    infoScoreMenu;
  return (
    <Card bg="secondary card-info" text="white" className="mt-2">
      <Card.Header className="fw-bolder text-sm-start text-md-center bg-light text-success">
        Información del menú:
      </Card.Header>
      <Card.Body className="d-flex flex-row flex-wrap bg-primary">
        
        <Col
          sm={12}
          md={3}
          className="fw-bolder info text-sm-start text-md-center px-2 py-1 "
        >
          <i className="fa fa-arrow-circle-right" aria-hidden="true" /> Precio
          menu: ${accumulatePriceMenu}
        </Col>

        <Col
          className="fw-bolder info text-sm-start text-md-center px-2 py-1"
          sm={12}
          md={4}
          lg={5}
        >
          <i className="fa fa-arrow-circle-right" aria-hidden="true" /> Tiempo
          preparación menu: {averagePrepTime} Min
        </Col>

        <Col
          className="fw-bolder info text-sm-start text-md-center px-2 py-1"
          sm={12}
          md={4}
          lg={4}
        >
          <i className="fa fa-arrow-circle-right" aria-hidden="true" /> Promedio
          healt score: {averageHealtScore} pts.
        </Col>
      </Card.Body>
    </Card>
  );
};

export default ScoreAverageAndAcumulations;
