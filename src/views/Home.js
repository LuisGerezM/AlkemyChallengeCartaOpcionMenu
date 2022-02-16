import React, { useCallback, useContext, useEffect, useState } from "react";
import NavbarHome from "../components/navbar/NavbarHome";
import { Outlet, useNavigate } from "react-router-dom";
import { sweetAlertConfirm } from "../helper/sweetAlerts/sweetAlertsConfirm";
import FormControlInput from "../components/forms/FormControlInput";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import CustomButton from "../components/button/CustomButton";
import FormSearch from "../components/forms/formSearch/FormSearch";
import MenuContext from "../context/menuContext";

// en el HOME se va a mostrar la lista de platos

const Home = () => {
  const { showPage } = useContext(MenuContext);

  const navigate = useNavigate();

  useEffect(() => {
    showPage === 0 && navigate("lista-platos");
    showPage === 1 && navigate("buscador-platos");
    showPage === 3 && navigate("detalles-plato");

    return () => {
      console.log("demonstando effect de home");
    };
  }, [showPage]);

  return (
    <>
      <NavbarHome />
      <Container className="d-flex justify-content-center w-100">
        <Row className="mt-3">
          <Outlet />
        </Row>

        {/* <Row>
          <Col className="mt-3" >
            <Outlet />
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Home;
