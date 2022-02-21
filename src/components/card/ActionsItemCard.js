import CustomButton from "components/button/CustomButton";
import CustomTooltipButton from "components/button/CustomTooltipButton";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ActionsItemCard = ({
  handlerShowItem = null,
  handlerAddItem = null,
  handlerDeleteItem = null,
  item,
}) => {
  const params = useLocation(); // obtengo un obj con eltos. y uno d estos es pathname: "/buscador-platos"

  return (
    <Row>
      <Col className="d-flex justify-content-evenly">

        {/* show */}
        {params.pathname !== "/detalles-plato" && (
          <CustomTooltipButton
            variant="outline-primary"
            text={<i className="fas fa-eye"></i>}
            handleClickButton={handlerShowItem}
            placement="left"
            msg="Ver Detalles"
            item={item}
            link="link"
          />
        )}

        {/* add */}
        {/* CHEQUEAR Q ANDE BIEN ESTO */}
        {(params.pathname === "/buscador-platos" || params.pathname === "/detalles-plato") && (
          <CustomTooltipButton
            variant="outline-success"
            text={<i className="fas fa-plus-circle"></i>}
            handleClickButton={handlerAddItem}
            placement="right"
            msg="Agregar al Menu"
            item={item}
          />
        )}

        {/* delete  */}
        {params.pathname === "/lista-platos" && (
          <CustomTooltipButton
            variant="outline-danger"
            text={<i className="fas fa-trash-alt"></i>}
            handleClickButton={handlerDeleteItem}
            placement="right"
            msg="Eliminar"
            item={item}
          />
        )}
      </Col>
    </Row>
  );
};

export default ActionsItemCard;
