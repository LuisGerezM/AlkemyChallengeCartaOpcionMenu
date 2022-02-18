import CustomButton from "components/button/CustomButton";
import useShortenSummary from "hooks/useShortenSummary";
import React from "react";
import { useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import ActionsItemCard from "./ActionsItemCard";
import "./style.css";




const ItemList = ({ item }) => {
  // console.log("item", item);
  const { title, image, summary } = item;
  // console.log("summary", summary);
  // acorta texto .. dejando con ... despues de unas cuántas palabras
  const content = useShortenSummary(summary);
  

  const handlerShowItem = () => {
    console.log("show");
  };

  const handlerDeleteItem = () => {
    console.log("delete");
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
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ItemList;
