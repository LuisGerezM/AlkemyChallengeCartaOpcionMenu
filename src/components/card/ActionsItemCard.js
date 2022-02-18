import CustomButton from "components/button/CustomButton";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ActionsItemCard = ({ handlerShowItem, handlerDeleteItem }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-evenly">
        {/* show */}
        <CustomButton
          variant="outline-primary"
          text={<i className="fas fa-eye"></i>}
          handleClickButton={handlerShowItem}
        />
        {/* </Col> */}
        {/* <Col className="d-flex justify-content-sm-center" sm={6}> */}
        {/* delete  */}
        <CustomButton
          variant="outline-danger"
          text={<i className="fas fa-trash-alt"></i>}
          handleClickButton={handlerDeleteItem}
        />
      </Col>
    </Row>
  );
};

export default ActionsItemCard;
