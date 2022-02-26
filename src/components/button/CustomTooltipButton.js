import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const CustomTooltipButton = ({
  variant,
  text,
  handleClickButton,
  placement,
  msg,
  item,
  section = null,
  disabled,
  from = null
}) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          <strong>{msg}</strong>
        </Tooltip>
      }
    >
      {/* Es un Link y no un button, porque tengo que ir a la tura relativa 'DetallePlato';; VER como trabajo esta parte, como es link me va a pasar directo a page detalle plato, entonces quiza aqui deba ver si handle click button funciona o no ... para ver como guardo el item que tendria que buscar para mostrar ;; CASO CONTRARIO redireccionar con un navigation desde handle show */}
      {/* {link === "link" ? (
        <Link
          as={Button}
          variant={variant}
          onClick={() => handleClickButton(item)}
          to='detalles-plato'
        >
          {text}
        </Link>
      ) : ( */}
      {/* section es par el tamaño del btn  */}
      <Button
        className={`${section && section}`}
        variant={variant}
        onClick={() => handleClickButton(item, from)}
        disabled={disabled}
      >
        {text}
      </Button>
      {/* )} */}
    </OverlayTrigger>
  );
};

export default CustomTooltipButton;

/*
variant="outline-danger"
            text={<i className="fas fa-trash-alt"></i>}
            handleClickButton={handlerDeleteItem}
*/
