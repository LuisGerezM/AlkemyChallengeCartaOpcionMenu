import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import FormSearch from "../components/forms/formSearch/FormSearch";
import ItemList from "../components/card/ItemList";
import CustomButton from "../components/button/CustomButton";
import FilterButtonResultSearchRecipes from "../components/button/FilterButtonResultSearchRecipes";
import MenuContext from "../context/menuContext";
import SeeMoreResult from "components/button/SeeMoreResult";
import usePagination from "hooks/usePagination";

const BuscadorPlatos = () => {
  // cuando empiece a escribir mostrar un skeletom ui en vez del loading

  const {
    page,
    setPage,
    loadingSearchFood,
    setLoadingSearchFood,
    disabledButtonMoreRecipes,
    setDisabledButtonMoreRecipes,
    inputSearch,
    setInputSearch,
    resultSearch,
    setResultSearch,
  } = useContext(MenuContext);

  // const [loadingSearchFood, setLoadingSearchFood] = useState(false);

  // const { loadingSearchFood, setLoadingSearchFood, setPage, inputSearch } =
  //   usePagination(setResultSearch);

  return (
    <>
      <Col sm={12} className="d-flex justify-content-center mt-3 ">
        <Col>
          <FormSearch />
        </Col>
      </Col>
      {console.log("resultSearch", resultSearch)}
      {resultSearch.length !== 0 && (
        <>
          {/* DSPUES VER SI DEJO O NO ESTE BOTON POR Q NO PIDEN EN EL EJERCICIO  */}
          {/* <Col className="mt-3" sm={4}>
            <FilterButtonResultSearchRecipes />
          </Col> */}
          <Row className="mt-sm-3">
            {<div>Resultados de {inputSearch}</div>}
            {resultSearch.map((element) => (
              <Col
                key={element.id}
                className="d-flex justify-content-center"
                sm={6}
              >
                <ItemList item={element} />
              </Col>
            ))}

            <Row className="my-3">
              <SeeMoreResult
                setResultSearch={setResultSearch}
                setPage={setPage}
              />
            </Row>
          </Row>
        </>
      )}
    </>
  );
};

export default BuscadorPlatos;
