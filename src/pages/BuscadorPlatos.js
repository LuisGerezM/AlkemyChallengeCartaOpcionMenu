import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import FormSearch from "../components/forms/formSearch/FormSearch";
import ItemList from "../components/card/ItemList";
import MenuContext from "../context/menuContext";
import SeeMoreResult from "components/button/SeeMoreResult";
import SkeletonLoadingRecipes from "components/skeletonsLoading/SkeletonLoadingRecipes";
import MessageAlert from "components/alerts/MessageAlert";

const BuscadorPlatos = () => {
  const {
    setPage,
    loadingSearchFood,
    inputSearch,
    resultSearch,
    setResultSearch,
  } = useContext(MenuContext);

  return (
    <>
      <Col
        sm={12}
        md={6}
        lg={4}
        className="d-flex justify-content-center mt-3 "
      >
        <FormSearch />
      </Col>

      {loadingSearchFood && (
        <Row>
          <SkeletonLoadingRecipes />
        </Row>
      )}

      {resultSearch?.length !== 0 ? (
        <>
          <Row className="mt-sm-3">
            <div>
              { 'Resultados de: '} 
              <strong className="text-decoration-underline">
                {inputSearch}
              </strong>
            </div>

            {resultSearch?.map((element) => (
              <Col
                key={element.id}
                className="d-flex justify-content-center"
                sm={6}
                lg={4}
              >
                <ItemList item={element} from="buscador" />
              </Col>
            ))}

            {loadingSearchFood && <SkeletonLoadingRecipes />}

            <Col sm={12} className="mt-3 mb-5 d-flex justify-content-center">
              <SeeMoreResult
                setResultSearch={setResultSearch}
                setPage={setPage}
              />
            </Col>
          </Row>
        </>
      ) : (
        !loadingSearchFood && (
          <MessageAlert
            message="Busca tu receta favorita"
            color={"info"}
            heading="Bienvenido!!!"
          />
        )
      )}
    </>
  );
};

export default BuscadorPlatos;
