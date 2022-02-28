import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import ModalSummary from "./ModalSummary";

const Modal = ({ contenyResult, content, title }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleHide = () => setModalShow(false);

  return (
    <>
      <ModalSummary
        show={modalShow}
        onHide={handleHide}
        content={content}
        title={title}
      />
      <Col className="summary-col d-flex justify-content-between align-items-center py-2">
        <Button className="summary" variant="ligth p-2" onClick={handleShow}>
          <div
            className="text-truncate col-11"
            dangerouslySetInnerHTML={{
              __html: `${contenyResult.phrasesContentShow}.`,
            }}
          />
        </Button>
      </Col>
    </>
  );
};

export default Modal;
