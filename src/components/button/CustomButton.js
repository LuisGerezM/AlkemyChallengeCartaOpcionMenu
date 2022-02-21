import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({
  variant = "primary",
  type = null,
  text,
  disabledBtn = null,
  handleClickButton = null,
  size = null,
}) => {
  
  return (
    <Button variant={variant} type={type} disabled={disabledBtn && true} onClick={handleClickButton ? handleClickButton : null} size={size}>
      {text}
    </Button>
  );
};

export default CustomButton;
