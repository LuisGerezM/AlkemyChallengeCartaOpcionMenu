import React from "react";
import NotFoundCard from "components/card/notFound";
import { Col, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Row className="mt-5">
      <Col className="d-flex justify-content-center mt-5">
        <NotFoundCard />
      </Col>
    </Row>
  );
};

export default NotFound;
