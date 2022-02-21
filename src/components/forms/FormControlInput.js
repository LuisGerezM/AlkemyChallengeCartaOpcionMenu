import React from "react";
import { FormControl } from "react-bootstrap";

const FormControlInput = ({ name, type, placeholder }) => {
  return (
    <FormControl
      name={name}
      type="search"
      placeholder={placeholder}
      className=""
      aria-label={type === "search" ? "Search" : ""}
    />
  );
};

export default FormControlInput;
