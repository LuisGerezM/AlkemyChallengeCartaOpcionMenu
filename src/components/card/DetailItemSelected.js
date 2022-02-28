import SkeletonLoadingDetailsRecipe from "components/skeletonsLoading/SkeletonLoadingDetailsRecipe";
import MenuContext from "context/menuContext";
import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import ActionsItemCard from "./ActionsItemCard";
import NoPhoto from "assets/img/no-fotos.png";
import "./style.css";
import SummaryRecipe from "components/summaryRecipe/SummaryRecipe";

const DetailItemSelected = ({ from }) => {
  const {
    handlerAddItem,
    loadingSelectedDetails,
    detailsRecipeSelected,
    actionBtnDetails,
    handlerDeleteItem,
  } = useContext(MenuContext);

  if (loadingSelectedDetails) return <SkeletonLoadingDetailsRecipe />;

  const {
    diets,
    image,
    title,
    summary,
    extendedIngredients,
    pricePerServing,
    servings,
    vegan,
    readyInMinutes,
    healthScore,
  } = detailsRecipeSelected;

  return (
    <Card className="mt-3" border="primary">
      <Card.Img
        className="mt-2 mx-auto"
        variant="top"
        src={image ? image : ""}
        style={{ width: "96%" }}
      />
      {!image && (
        <>
          <Image
            className="mt-2 mx-auto"
            src={NoPhoto}
            style={{ width: "20%" }}
            alt="No Photo"
          />
        </>
      )}
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Card.Subtitle className="mb-2 text-muted">
            Ingredientes:
          </Card.Subtitle>
          <ListGroupItem>
            {extendedIngredients.map((element, idx) =>
              idx === extendedIngredients.length - 1
                ? `${element.name}. `
                : ` ${element.name}, `
            )}
          </ListGroupItem>
        </ListGroupItem>
        <ListGroupItem>
          <SummaryRecipe
            title={title}
            content={summary}
            vegan={vegan}
            readyInMinutes={readyInMinutes}
            healthScore={healthScore}
          />
        </ListGroupItem>
      </ListGroup>
      {diets.length !== 0 && (
        <ListGroupItem>
          <Card.Subtitle className="mb-2 text-muted">Dietas:</Card.Subtitle>
          <ListGroupItem>
            {diets.map((element, idx) =>
              idx === diets.length - 1 ? `${element}. ` : ` ${element}, `
            )}
          </ListGroupItem>
        </ListGroupItem>
      )}

      <ListGroupItem>
        <Card.Subtitle className="mb-2 text-muted">
          {" "}
          Costo del plato:
        </Card.Subtitle>
        <ListGroupItem>
          <p className="fw-bolder">
            ${(pricePerServing / servings).toFixed(2)}
          </p>
        </ListGroupItem>
      </ListGroupItem>

      <ListGroup.Item>
        <ActionsItemCard
          handlerAddItem={handlerAddItem}
          handlerDeleteItem={handlerDeleteItem}
          item={detailsRecipeSelected}
          actionBtnDetails={actionBtnDetails}
          from={from}
        />
      </ListGroup.Item>
    </Card>
  );
};

export default DetailItemSelected;
