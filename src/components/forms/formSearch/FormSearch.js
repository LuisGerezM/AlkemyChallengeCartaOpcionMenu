import React, { useContext } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import MenuContext from "../../../context/menuContext";
import { sweetAlertMsg } from "../../../helper/sweetAlerts/sweetAlertMsg";
import CustomButton from "../../button/CustomButton";
import FormControlInput from "../FormControlInput";

const FormSearch = () => {
  const {
    fetchRecipes,
    setInputSearch,
    resultSearch,
    setResultSearch,
    setDisabledButtonMoreRecipes,
    setPage,
    setLoadingSearchFood,
    INITIAL_PAGE,
  } = useContext(MenuContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reiniciamos pagina inicial
    // console.log("INITIAL_PAGE en formSearch", INITIAL_PAGE);
    setPage(INITIAL_PAGE);
    setInputSearch(null);

    // mostramos el loading de la 1ra busqueda
    setLoadingSearchFood(true);

    let input = e.target.search.value;
    const fetch = await fetchRecipes(input);
    // console.log("fetch", fetch);
    // este msj es para cuándo no exista la receta
    if (fetch.results.length === 0) {
      sweetAlertMsg(
        "info",
        "No existe esa receta, quiza escribiste mal",
        "Atención"
      );
    // } else if (fetch.results.length === 0) {
    //   sweetAlertMsg("info", "No hay más recetas", "Atención");
    //   setDisabledButtonMoreRecipes(true);
    } else {
      setInputSearch(input);
      setResultSearch(fetch.results);
      setDisabledButtonMoreRecipes(false);
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
        placeholder="Buscar..."
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
