import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { navDropdownImage } from "./image/navDropdownImage";
import Swal from "sweetalert2";
import { sweetAlertConfirmSaveToken } from "../../helper/sweetAlerts/sweetAlertConfirmSaveToken";
import { useNavigate } from "react-router-dom";
import AuthUserContext from "../../context/userContext";
import "./style.css";
import Sidebar from "../sidebar/SidebarButton";
import SidebarButton from "../sidebar/SidebarButton";

const NavbarHome = () => {
  const { readToken } = useContext(AuthUserContext);
  const logOut = () => {
    sweetAlertConfirmSaveToken(readToken);
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="primary">
        <Container>
          {/* VER DESPUES IS DEJO O SACO EL SIDEBARbutton  */}
          {/* <SidebarButton /> */}
          {/* <Navbar.Brand className="d-none d-sm-inline "> */}
          <Navbar.Brand>Challenge Alkemy</Navbar.Brand>
          <Navbar.Brand className="d-flex align-items-center"></Navbar.Brand>

          <NavDropdown title={navDropdownImage} className="nav-item dropdown">
            <NavDropdown.Item
              className="text-primary"
              as={"button"}
              onClick={logOut}
            >
              Cerrar Sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
