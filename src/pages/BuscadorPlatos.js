import React from "react";
import {
  Button,
  Col,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import FormSearch from "../components/forms/formSearch/FormSearch";
import back from "../assets/img/back.png";
import ButtonBack from "../components/button/ButtonBack";
import ItemList from "../components/card/ItemList";

const BuscadorPlatos = () => {
  // cuando empiece a escribir mostrar un skeletom ui en vez del loading

  return (
    <Row>
      <Col sm={12} className="d-flex ">
        <Col md={2}>
          <ButtonBack />
        </Col>
        <Col md={9} className="ms-1">
          <FormSearch />
        </Col>
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
  );
};

export default BuscadorPlatos;
