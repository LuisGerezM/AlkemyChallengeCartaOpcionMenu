import React from "react";
import { Alert, Col, Row } from "react-bootstrap";

const MessageAlert = ({ message, color, type = null, heading = null }) => {
  return (
    <Row className="d-flex justify-content-center">
      {type === "text" ? (
        <Col>
          <p className={`fst-italic text-${color} text-center mt-1`}>
            {message}
          </p>
        </Col>
      ) : (
        <Col sm={12}>
          <Alert className="mt-5 text-center" variant={color}>
            <Alert.Heading>{heading}</Alert.Heading>
            {message}
          </Alert>
        </Col>
      )}
    </Row>
  );
};

export default MessageAlert;
