import React, { useContext } from "react";
import MenuContext from "context/menuContext";
import { Card, Image, ListGroup } from "react-bootstrap";
import ActionsItemCard from "./ActionsItemCard";
import "./style.css";
import SummaryRecipe from "components/summaryRecipe/SummaryRecipe";

const ItemList = ({ item, from }) => {
  const {
    title,
    image,
    summary,
    pricePerServing,
    servings,
    vegan,
    readyInMinutes,
    healthScore,
  } = item;

  const { handlerAddItem, handlerShowItem, handlerDeleteItem } =
    useContext(MenuContext);

  return (
    <Card border="primary w-100 w-sm-75" className="mt-3 text-primary">
      <Card.Header className="fw-bold">{title}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Image className="w-100 col col-sm-12" src={image} />
        </ListGroup.Item>

        <ListGroup.Item>
          <SummaryRecipe
            title={title}
            content={summary}
            vegan={vegan}
            readyInMinutes={readyInMinutes}
            healthScore={healthScore}
          />
        </ListGroup.Item>

        <ListGroup.Item>
          <Card.Subtitle className="mb-2 text-muted">
            Costo plato por persona:
          </Card.Subtitle>
          <div className="fw-bolder">
            ${(pricePerServing / servings).toFixed(2)}
          </div>
        </ListGroup.Item>

        <ListGroup.Item>
          <ActionsItemCard
            handlerShowItem={handlerShowItem}
            handlerDeleteItem={handlerDeleteItem}
            handlerAddItem={handlerAddItem}
            item={item}
            from={from}
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ItemList;
