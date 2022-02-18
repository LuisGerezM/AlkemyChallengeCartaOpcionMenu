import { Formik } from "formik";
import usePagination from "hooks/usePagination";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MenuContext from "../../../context/menuContext";
import { sweetAlertMsg } from "../../../helper/sweetAlerts/sweetAlertMsg";
import CustomButton from "../../button/CustomButton";
import FormControlInput from "../FormControlInput";

const FormSearch = () => {
  const {
    fetchRecipes,
    setInputSearch,
    setResultSearch,
    setLoadingSearchFood,
  } = useContext(MenuContext);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let input = e.target.search.value;
    const fetch = await fetchRecipes(input);

    if (fetch.results.length === 0) {
      sweetAlertMsg(
        "info",
        "No existe esa receta, quiza escribiste mal",
        "Atención"
      );
    } else {
      setInputSearch(input);
      setResultSearch(fetch.results);
    }

    e.target.search.value = "";
  };

  return (
    // <Formik
    //   initialValues={{
    //     search: "",
    //   }}
    //   validate={(valueValidate) => {
    //     let errors = {};

    //     // validamos que tenga algo escrito
    //     if (valueValidate.search < 3) {
    //       errors.search = "Debes escribir más de dos caracteres";
    //     }
    //     return errors;
    //   }}

    //   onSubmit={async(valueSubmit, {resetForm})=>{
    //     setLoading(true)
    //     resetForm()

    //     const fetchFood = await

    //   }}

    // >
    <Form className="d-flex col-sm-12" onSubmit={handleSubmit}>
      <FormControlInput
        name="search"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <CustomButton
        variant="outline-success"
        text="Search"
        type="submit"
        //handleClickButton={handleClickButton}
      />
    </Form>
    // </Formik>
  );
};

export default FormSearch;
