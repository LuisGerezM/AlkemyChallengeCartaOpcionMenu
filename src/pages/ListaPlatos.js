import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button/CustomButton";
import ItemList from "../components/card/ItemList";
import MenuContext from "../context/menuContext";

const ListaPlatos = () => {
  const navegate = useNavigate();
  const { showPage, setShowPage } = useContext(MenuContext);

  const handleClickButton = (e) => {
    e.preventDefault();
    setShowPage(1);
    console.log("click");
    console.log("showPage en lista platos", showPage);
  };

  return (
    <>
      <Row>
        <Col
          className="d-flex justify-content-center justify-content-sm-start ms-md-3"
          sm={12}
        >
          <CustomButton
            variant="outline-primary"
            text="Buscar Platos"
            type="button"
            handleClickButton={handleClickButton}
            size="lg"
          />
        </Col>
        <Row className="mt-sm-5">
          <Col className="d-flex justify-content-lg-center" sm={6}>
            <ItemList />
          </Col>
          <Col className="d-flex justify-content-lg-center" sm={6}>
            <ItemList />
          </Col>
          <Col className="d-flex justify-content-lg-center" sm={6}>
            <ItemList />
          </Col>
          <Col className="d-flex justify-content-lg-center" sm={6}>
            <ItemList />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default ListaPlatos;
