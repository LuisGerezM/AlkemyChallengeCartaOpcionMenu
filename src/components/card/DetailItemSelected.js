import SkeletonLoadingDetailsRecipe from "components/skeletonsLoading/SkeletonLoadingDetailsRecipe";
import MenuContext from "context/menuContext";
import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ActionsItemCard from "./ActionsItemCard";
import './style.css'

const DetailItemSelected = () => {
  const { handlerAddItem, loadingSelectedDetails, detailsRecipeSelected } =
    useContext(MenuContext);

  if (loadingSelectedDetails) return <SkeletonLoadingDetailsRecipe />;

  // diets es array
  const { diets, image, title, summary, extendedIngredients } =
    detailsRecipeSelected;
  console.log("length --> ", diets.length);
  console.log(
    "detailsRecipeSelected en detail item selected",
    detailsRecipeSelected
  );

  return (
    //   VER SI DJAMOS O SACAMOS EL WIDT Y EL HEIG
    <Card className="mt-3 w-50 " border="primary">
      <Card.Img
        className="mt-2 mx-auto"
        variant="top"
        src={image}
        style={{ width: "96%" }}
      />
      <Card.Body>
        <Card.Title className="fw-bolder">{title}</Card.Title>
        <Card.Text>
          <strong className="text-decoration-underline">Ingredientes:</strong>
          {extendedIngredients.map((element, idx) =>
            idx === extendedIngredients.length - 1
              ? `${element.name}. `
              : ` ${element.name}, `
          )}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Card.Subtitle className="mb-2 text-muted">
            Caracteristicas del plato:{" "}
          </Card.Subtitle>
          <ListGroupItem>
            <div
              dangerouslySetInnerHTML={{
                __html: summary,
              }}
            />
          </ListGroupItem>
        </ListGroupItem>

        {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
      </ListGroup>
      <ListGroupItem>
        <Card.Subtitle className="mb-2 text-muted">Dietas:</Card.Subtitle>
        <ListGroupItem>
          {diets.map((element, idx) =>
            idx === diets.length - 1 ? `${element}. ` : ` ${element}, `
          )}
        </ListGroupItem>
      </ListGroupItem>
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
