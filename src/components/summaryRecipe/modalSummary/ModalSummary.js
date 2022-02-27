import { Button, Modal } from "react-bootstrap";

export default function ModalSummary(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Resumen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <div
          className="col-11"
          dangerouslySetInnerHTML={{
            __html: `${props.content}.`,
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
