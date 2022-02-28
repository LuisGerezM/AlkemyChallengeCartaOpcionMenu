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
        <Modal.Title
          className="text-success fw-bold"
          id="contained-modal-title-vcenter"
        >
          Resumen
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-primary">{props.title}</h4>
        <div
          className="col-11"
          dangerouslySetInnerHTML={{
            __html: `${props.content}.`,
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
