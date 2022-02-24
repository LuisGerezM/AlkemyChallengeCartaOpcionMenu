import SkeletonLoadingDetailsRecipe from "components/skeletonsLoading/SkeletonLoadingDetailsRecipe";
import MenuContext from "context/menuContext";
import React, { useContext } from "react";
import { Card, ListGroup, ListGroupItem, Image } from "react-bootstrap";
import ActionsItemCard from "./ActionsItemCard";
import NoPhoto from "assets/img/no-fotos.png";
import "./style.css";

const DetailItemSelected = () => {
  const {
    handlerAddItem,
    loadingSelectedDetails,
    detailsRecipeSelected,
    actionBtnDetails,
  } = useContext(MenuContext);

  if (loadingSelectedDetails) return <SkeletonLoadingDetailsRecipe />;

  // diets es array
  const {
    diets,
    image,
    title,
    summary,
    extendedIngredients,
    pricePerServing,
    servings,
  } = detailsRecipeSelected;

  // console.log("image --> ", image);

  // console.log(
  //   "detailsRecipeSelected en detail item selected",
  //   detailsRecipeSelected
  // );

  return (
    //   VER SI DJAMOS O SACAMOS EL WIDT Y EL HEIG
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
          item={detailsRecipeSelected}
          actionBtnDetails={actionBtnDetails}
        />
      </ListGroup.Item>
    </Card>
  );
};

export default DetailItemSelected;
