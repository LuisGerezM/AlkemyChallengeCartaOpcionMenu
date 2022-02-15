import React, { useContext } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { navDropdownImage } from "./image/navDropdownImage";
import Swal from "sweetalert2";
import { sweetAlertConfirm } from "../../helper/sweetAlerts/sweetAlertsConfirm";
import { useNavigate } from "react-router-dom";
import AuthUserContext from "../../context/userContext";

const NavbarHome = () => {
  const { readToken } = useContext(AuthUserContext);

  const logOut = () => {
    sweetAlertConfirm(readToken);
  };

  return (
    <Navbar expand="lg" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand>Challenge Alkemy</Navbar.Brand>
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
  );
};

export default NavbarHome;
