import React, { useContext } from "react";
import NavbarHome from "../components/navbar/NavbarHome";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ToggleBtnGroup from "../components/button/ToggleBtnGroup";
import MenuContext from "context/menuContext";

const Home = () => {
  
  const { handleToggleBtnClick } = useContext(MenuContext);

  return (
    <>
      <NavbarHome />
      <Container className="w-100">
        <Row className="d-flex justify-content-center">
          <Col sm={12}>
            <ToggleBtnGroup handleToggleBtnClick={handleToggleBtnClick} />
          </Col>
          <Col sm={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
