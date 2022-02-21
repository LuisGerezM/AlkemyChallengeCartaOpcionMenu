import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import FormSearch from "../components/forms/formSearch/FormSearch";
import ItemList from "../components/card/ItemList";
import MenuContext from "../context/menuContext";
import SeeMoreResult from "components/button/SeeMoreResult";
import SkeletonLoadingRecipes from "components/skeletonsLoading/SkeletonLoadingRecipes";

const BuscadorPlatos = () => {
  // cuando empiece a escribir mostrar un skeletom ui en vez del loading

  const {
    setPage,
    loadingSearchFood,
    inputSearch,
    resultSearch,
    setResultSearch,
  } = useContext(MenuContext);

  // const [loadingSearchFood, setLoadingSearchFood] = useState(false);

  // const { loadingSearchFood, setLoadingSearchFood, setPage, inputSearch } =
  //   usePagination(setResultSearch);
  // console.log("resultSearch en Buscador Plato", resultSearch);
  return (
    <>
      <Col
        sm={12}
        md={6}
        lg={4}
        className="d-flex justify-content-center mt-3 "
      >
        {/* hamburger */}
        <FormSearch />
      </Col>

      {loadingSearchFood && (
        <Row>
          {/* ver si esta COL del skeleton sirven para algo, mepa q NO SIRVEN... sacar sino */}
          {/* <Col className="d-flex justify-content-center" sm={12}> */}{" "}
          <SkeletonLoadingRecipes /> {/* </Col> */}
        </Row>
      )}

      {resultSearch?.length !== 0 && (
        <>
          {/* DSPUES VER SI DEJO O NO ESTE BOTON POR Q NO PIDEN EN EL EJERCICIO  */}
          {/* <Col className="mt-3" sm={4}>
            <FilterButtonResultSearchRecipes />
          </Col> */}
          <Row className="mt-sm-3">
            {
              <div>
                Resultados de{" "}
                <strong className="text-decoration-underline">
                  {inputSearch}
                </strong>
              </div>
            }

            {resultSearch?.map((element) => (
              <Col
                key={element.id}
                className="d-flex justify-content-center"
                sm={6}
              >
                <ItemList item={element} />
              </Col>
            ))}

            {/* <Row className="my-4"> */}
            {/* {console.log("loadingSearchFood", loadingSearchFood)} */}
            {/* <Col className="d-flex justify-content-center" sm={12}> */}
            {loadingSearchFood && (
              <>
                {/* ver si esta COL del skeleton sirven para algo, mepa q NO SIRVEN... sacar sino */}
                {/* <Col className="d-flex justify-content-center" sm={12}> */}{" "}
                <SkeletonLoadingRecipes /> {/* </Col> */}
              </>
            )}
            {/* </Col> */}
            {/* <Row> */}
              <Col sm={12} className="mt-3 mb-5 d-flex justify-content-center">
              <SeeMoreResult
                setResultSearch={setResultSearch}
                setPage={setPage}
              />
            </Col>
            {/* </Row> */}
            
            {/* </Row> */}
          </Row>
        </>
      )}
    </>
  );
};

export default BuscadorPlatos;
