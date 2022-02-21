import React, { useContext } from "react";
import NavbarHome from "../components/navbar/NavbarHome";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ToggleBtnGroup from "../components/button/ToggleBtnGroup";
import MenuContext from "context/menuContext";

// en el HOME se va a mostrar la lista de platos
// http://localhost:3000/buscador-platos
// http://localhost:3000/lista-platos
const Home = () => {
  //const [clickToggleBtn, setClickToggleBtn] = useState("1");

  // let navigate = useNavigate();

  // const handleToggleBtnClick = (element) => {
  //   // console.log(element)
  //   const { page } = element;
  //   console.log("page in handle toogle btn click", page);
  //   //setClickToggleBtn(value);
  //   navigate(page);
  // };

  const { handleToggleBtnClick } = useContext(MenuContext);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   showPage === 0 && navigate("lista-platos");
  //   showPage === 1 && navigate("buscador-platos");
  //   showPage === 3 && navigate("detalles-plato");

  //   return () => {
  //     console.log("demonstando effect de home");
  //   };
  // }, [showPage]);

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
