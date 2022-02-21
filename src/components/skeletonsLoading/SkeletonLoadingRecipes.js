import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoadingRecipes = () => {
  return (
    <>
      <Col className="d-flex justify-content-center mt-3" sm={6}>
        <SkeletonTheme baseColor="#d1d1d1" highlightColor="#919191">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "18rem" }}
          >
            <div className="">
              <Skeleton duration={1.5} width={250} height={20} />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Skeleton duration={1.5} width={250} height={100} />
              </li>
              <li className="list-group-item">
                <Skeleton duration={1.5} width={250} height={20} />{" "}
                <Skeleton duration={1.5} width={250} height={75} />
              </li>
              <li className="list-group-item">
                <Skeleton duration={1.5} width={250} height={20} />
              </li>
            </ul>
          </div>
        </SkeletonTheme>
      </Col>
      <Col className="d-flex justify-content-center mt-3" sm={6}>
        <SkeletonTheme baseColor="#d1d1d1" highlightColor="#919191">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "18rem" }}
          >
            <div className="">
              <Skeleton duration={1.5} width={250} height={20} />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Skeleton duration={1.5} width={250} height={100} />
              </li>
              <li className="list-group-item">
                <Skeleton duration={1.5} width={250} height={20} />{" "}
                <Skeleton duration={1.5} width={250} height={75} />
              </li>
              <li className="list-group-item">
                <Skeleton duration={1.5} width={250} height={20} />
              </li>
            </ul>
          </div>
        </SkeletonTheme>
      </Col>
    </>
  );
};

export default SkeletonLoadingRecipes;

// SKELETON_NUMS_CARDS
