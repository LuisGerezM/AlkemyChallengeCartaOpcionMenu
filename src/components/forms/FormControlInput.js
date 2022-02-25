import MessageAlert from "components/alerts/MessageAlert";
import { ErrorMessage } from "formik";
import React from "react";
import { Col, FormControl } from "react-bootstrap";

const FormControlInput = ({
  name,
  type,
  placeholder,
  values,
  errors,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <Col sm={10}>
        <FormControl
          name={name}
          type="search"
          placeholder={placeholder}
          className="form-search"
          aria-label={type === "search" ? "Search" : ""}
          value={values.search}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          name="search"
          component={() => (
            <MessageAlert
              message={errors.search}
              color={"danger"}
              type={"text"}
            />
          )}
        />
      </Col>
    </>
  );
};

export default FormControlInput;
