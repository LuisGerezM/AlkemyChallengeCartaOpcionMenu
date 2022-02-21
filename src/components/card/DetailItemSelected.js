import MenuContext from "context/menuContext";
import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ActionsItemCard from "./ActionsItemCard";

const DetailItemSelected = () => {

    const {handlerAddItem} = useContext(MenuContext)

  return (
    //   VER SI DJAMOS O SACAMOS EL WIDT Y EL HEIG
    <Card className="mt-3 " border="primary" style={{ width: "100%" }}>
      <Card.Img
        className="mt-2 mx-auto"
        variant="top"
        src="https://via.placeholder.com/600/92c952"
        style={{ width: "96%", height: "20rem" }}
      />
      <Card.Body>
        <Card.Title>Nombre Plato</Card.Title>
        <Card.Text>Ingredientes</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>

          <Card.Subtitle className="mb-2 text-muted">
            Caracteristicas del plato:
          </Card.Subtitle>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        </ListGroupItem>
       
        {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Links</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <ListGroup.Item>
          <ActionsItemCard
            handlerAddItem={handlerAddItem}
           // item={item}
          />
        </ListGroup.Item>
    </Card>
  );
};

export default DetailItemSelected;
