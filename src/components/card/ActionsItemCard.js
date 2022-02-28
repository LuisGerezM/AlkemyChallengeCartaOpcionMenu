import React, { useContext } from "react";
import CustomTooltipButton from "components/button/CustomTooltipButton";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MenuContext from "context/menuContext";

const ActionsItemCard = ({
  handlerShowItem = null,
  handlerAddItem = null,
  handlerDeleteItem = null,
  item,
  from,
}) => {
  const { stateBtnAdd, actionBtnDetails } = useContext(MenuContext);

  // chequeo page dónde estoy
  const params = useLocation();

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
            from={from}
          />
        )}

        {/* add */}
        {(params.pathname === "/buscador-platos" ||
          (params.pathname === "/detalles-plato" &&
            actionBtnDetails === 2)) && (
          <CustomTooltipButton
            variant="outline-success"
            text={<i className="fas fa-plus-circle"></i>}
            handleClickButton={handlerAddItem}
            placement="right"
            msg="Agregar al Menu"
            item={item}
            section={params.pathname === "/detalles-plato" && "w-50"}
            disabled={stateBtnAdd}
          />
        )}

        {/* delete  */}
        {(params.pathname === "/lista-platos" ||
          (params.pathname === "/detalles-plato" &&
            actionBtnDetails === 1)) && (
          <CustomTooltipButton
            variant="outline-danger"
            text={<i className="fas fa-trash-alt"></i>}
            handleClickButton={handlerDeleteItem}
            placement="right"
            msg="Eliminar"
            item={item}
            section={params.pathname === "/detalles-plato" && "w-50"}
            from={from}
          />
        )}
      </Col>
    </Row>
  );
};

export default ActionsItemCard;
