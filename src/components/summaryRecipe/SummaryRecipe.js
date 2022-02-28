import useShortenSummary from "hooks/useShortenSummary";
import React from "react";
import { Card, ListGroup, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ModalSum from "./modalSummary";
import "./styles.css";

const SummaryRecipe = ({
  title,
  content,
  vegan,
  readyInMinutes,
  healthScore,
}) => {
  const contenyResult = useShortenSummary(content);

  // chequeo page dónde estoy
  const params = useLocation();

  return (
    <>
      <Card.Subtitle className="mb-2 text-muted">
        Caracteristicas del plato:
      </Card.Subtitle>
      <ListGroup.Item>
        <Row>
          <ModalSum
            contenyResult={contenyResult}
            content={content}
            title={title}
          />
        </Row>
      </ListGroup.Item>
      <ListGroup.Item>
        ⏱
        {params.pathname !== "/detalles-plato"
          ? ` ${readyInMinutes} Min.`
          : ` Tiempo preparación: ${readyInMinutes} Min.`}
      </ListGroup.Item>
      <ListGroup.Item>
        ⛑
        {params.pathname !== "/detalles-plato"
          ? ` ${healthScore} pts.`
          : ` Healt score: ${healthScore} pts.`}
      </ListGroup.Item>
      <ListGroup.Item>
        {vegan ? <div> ✅ Plato vegano</div> : <div> ❌ Plato no vegano</div>}
      </ListGroup.Item>
    </>
  );
};

export default SummaryRecipe;
