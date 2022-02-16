import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({
  variant = "primary",
  type = null,
  text,
  loadingLogin = null,
  handleClickButton = null,
  size = null,
  ref = null
}) => {
  
  return (
    <Button ref={ref} variant={variant} type={type} disabled={loadingLogin && true} onClick={handleClickButton ? handleClickButton : null} size={size}>
      {text}
    </Button>
  );
};

export default CustomButton;
