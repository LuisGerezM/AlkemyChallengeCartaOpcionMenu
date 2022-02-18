import React, { useContext, useState } from "react";
import { Button, Col, Row, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button/CustomButton";
import ItemList from "../components/card/ItemList";
import MenuContext from "../context/menuContext";

const ListaPlatos = () => {
  const { platosSelected, loadingList, setLoadingList } = useContext(MenuContext);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  if (platosSelected.length === 0)
    return (
      <div>
        <Alert className="mt-5 text-center" variant="info">
        <Alert.Heading>Atención!!</Alert.Heading>
        Aún no tienes platos seleccionados, por favor busca tu receta favorita</Alert>
      </div>
    );

  return (
    <>
      <Row className="mt-sm-3">
        <Col className="d-flex justify-content-center" sm={6}>
          <ItemList />
        </Col>
        <Col className="d-flex justify-content-center" sm={6}>
          <ItemList />
        </Col>
        <Col className="d-flex justify-content-center" sm={6}>
          <ItemList />
        </Col>
        <Col className="d-flex justify-content-center" sm={6}>
          <ItemList />
        </Col>
      </Row>
    </>
  );
};

export default ListaPlatos;
