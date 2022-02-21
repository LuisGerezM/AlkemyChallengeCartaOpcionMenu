import CustomButton from "components/button/CustomButton";
import MenuContext from "context/menuContext";
import useShortenSummary from "hooks/useShortenSummary";
import React, { useContext } from "react";
import { useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ActionsItemCard from "./ActionsItemCard";
import "./style.css";

const ItemList = ({ item }) => {
  // console.log("item", item);
  const { title, image, summary } = item;
  // console.log("summary", summary);
  // acorta texto .. dejando con ... despues de unas cuántas palabras
  const content = useShortenSummary(summary);
  const { handleToggleBtnClick } = useContext(MenuContext);


  const handlerShowItem = (item) => {
    // AQUI con el id tengo que hacer el llamado para el otro endpoint, donde uso el id para buscar
    console.log("show");
    console.log("item", item);
    // AQUI hacer la llamada asincrona para el detalle del plato con la URL con id; iniciando el spiner o skeleton
    handleToggleBtnClick({ page: "detalles-plato" });
  };

  const handlerDeleteItem = (item) => {
    console.log("delete");
    console.log("item", item);
  };

  const handlerAddItem = (item) => {
    console.log("add");
    console.log("item", item);
  };

  return (
    <Card
      border="primary"
      className="mt-3 text-primary"
      style={{ width: "18rem" }}
    >
      <Card.Header className="fw-bold">{title}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Image className="image col col-sm-12" src={image} />
        </ListGroup.Item>
        <ListGroup.Item className="item-caract">
          {" "}
          <Card.Subtitle className="mb-2 text-muted">
            Caracteristicas del plato:
          </Card.Subtitle>
          {/* <p dangerouslySetInnerHTML={{ __html: summary }} /> */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${content.phrasesContentShow}.`,
            }}
          />
          <div
            className="text-truncate"
            dangerouslySetInnerHTML={{ __html: content.latestPharagraph }}
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <ActionsItemCard
            handlerShowItem={handlerShowItem}
            handlerDeleteItem={handlerDeleteItem}
            handlerAddItem={handlerAddItem}
            item={item}
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ItemList;
