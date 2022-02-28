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
  from = null,
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
      {/* section -> tamaño btn */}
      <Button
        className={`${section && section}`}
        variant={variant}
        onClick={() => handleClickButton(item, from)}
        disabled={disabled}
      >
        {text}
      </Button>
    </OverlayTrigger>
  );
};

export default CustomTooltipButton;
