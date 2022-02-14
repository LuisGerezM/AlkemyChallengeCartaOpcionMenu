import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

const SpinnerWithMsg = ({ msg }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-center" sm={12}>
        <Spinner animation="border" variant="primary" />
      </Col>
      <Col className="d-flex justify-content-center">
        <div className="text-primary mt-2">{msg}</div>
      </Col>
    </Row>
  );
};

export default SpinnerWithMsg;
