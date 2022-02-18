import React from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";

const FormGroupInput = ({ name, labelText, type, placeholder, msgError }) => {
  return (
    <Row className="mb-2">
      <Form.Group as={Col} md="12" controlId={`validationCustom-${name}`}>
        <Form.Label className="text-primary fw-bolder">{labelText}</Form.Label>
        <InputGroup hasValidation>
          {type === "email" && (
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          )}
          <Form.Control
            type={type}
            name={name}
            placeholder={placeholder}
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            {msgError}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
  );
};

export default FormGroupInput;
