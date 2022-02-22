import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoadingDetailsRecipe = () => {
  return (
    <SkeletonTheme baseColor="#d1d1d1" highlightColor="#919191">
      <Card className="mt-3 mb-5 " border="primary" style={{ width: "100%" }}>
        <Card.Body>
          <Skeleton
            className="mt-2 mx-auto"
            duration={1.5}
            width={"100%"}
            height={"10rem"}
          />
          <Skeleton duration={1.5} width={"100%"} height={20} />
          <Skeleton duration={1.5} width={"100%"} height={20} />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Card.Subtitle className="mb-2 text-muted">
              <Skeleton duration={1.5} width={"100%"} height={20} />
            </Card.Subtitle>
            <Skeleton duration={1.5} width={"100%"} height={20} />
          </ListGroupItem>
        </ListGroup>
        <ListGroup.Item>
          <Skeleton duration={1.5} width={"100%"} height={20} />
        </ListGroup.Item>
      </Card>
    </SkeletonTheme>
  );
};

export default SkeletonLoadingDetailsRecipe;
