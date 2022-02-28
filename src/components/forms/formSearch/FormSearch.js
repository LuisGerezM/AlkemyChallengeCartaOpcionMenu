import React, { useContext } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import MenuContext from "../../../context/menuContext";
import { sweetAlertMsg } from "../../../helper/sweetAlerts/sweetAlertMsg";
import CustomButton from "../../button/CustomButton";
import FormControlInput from "../FormControlInput";
import "../styles.css";

const FormSearch = () => {
  const {
    fetchRecipes,
    setInputSearch,
    setResultSearch,
    setDisabledButtonMoreRecipes,
    setPage,
    setLoadingSearchFood,
    INITIAL_PAGE,
  } = useContext(MenuContext);

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      validate={(valueValidate) => {
        let errors = {};
        const { search } = valueValidate;

        if (!search) {
          errors.search = "Debes escribir lo que quieras buscar";
        } else if (search.length < 3) {
          errors.search = "Debes escribir más de dos caracteres";
        }
        return errors;
      }}
      onSubmit={async (valueSubmit, { resetForm }) => {
        resetForm();

        // reiniciamos pagina resultados inicial
        setPage(INITIAL_PAGE);

        // reseteamos estados
        setResultSearch([]);
        setInputSearch(null);

        const { search } = valueSubmit;

        // loading de la 1ra busqueda
        setLoadingSearchFood(true);

        const fetch = await fetchRecipes(search);

        if (fetch.results.length === 0) {
          // no existe receta
          sweetAlertMsg(
            "info",
            `No encontramos la receta ${search}, quiza escribiste mal`,
            "Atención"
          );
        } else {
          // existe receta
          setInputSearch(search);
          setResultSearch(fetch.results);
          setDisabledButtonMoreRecipes(false);
        }
      }}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
        <Form className="d-flex col-sm-12" onSubmit={handleSubmit}>
          <FormControlInput
            name="search"
            type="search"
            placeholder="Buscar... ej: Cauliflower"
            aria-label="Search"
            values={values}
            errors={errors}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <CustomButton variant="outline-success" text="Buscar" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
