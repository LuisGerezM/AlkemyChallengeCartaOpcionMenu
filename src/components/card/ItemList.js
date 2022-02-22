import CustomButton from "components/button/CustomButton";
import MenuContext from "context/menuContext";
import useShortenSummary from "hooks/useShortenSummary";
import React, { useContext } from "react";
import { useState } from "react";
import {
  Anchor,
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ActionsItemCard from "./ActionsItemCard";
import "./style.css";

const ItemList = ({ item }) => {
  // console.log("item", item);
  const { title, image, summary } = item;
  // console.log("summary", summary);
  // acorta texto .. dejando con ... despues de unas cuántas palabras
  const content = useShortenSummary(summary);
  const {
    //handleToggleBtnClick,
    handlerAddItem,
    handlerShowItem,
    handlerDeleteItem,
  } = useContext(MenuContext);

  // PROBAR EL WIDTH A UN 50% o un 40% ... o un POQUITITO MAS Ancho VER SI FUNCA
  return (
    <Card border="primary w-100 w-sm-75" className="mt-3 text-primary">
      <Card.Header className="fw-bold">{title}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Image className="w-100 col col-sm-12" src={image} />
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
