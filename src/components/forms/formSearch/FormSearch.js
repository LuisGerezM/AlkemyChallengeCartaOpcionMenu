import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../button/CustomButton";
import FormControlInput from "../FormControlInput";

const FormSearch = () => {

  const handleClickButton = (e) => {
      e.preventDefault()
    console.log("click");

   
  };

  return (
    <Form className="d-flex col-sm-12">
      <FormControlInput
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <CustomButton
        variant="outline-success"
        text="Search"
        handleClickButton={handleClickButton}
      />
    </Form>
  );
};

export default FormSearch;
