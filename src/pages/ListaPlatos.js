import MessageAlert from "components/alerts/MessageAlert";
import ScoreAverageAndAcumulations from "components/card/ScoreAverageAndAcumulations";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import ItemList from "../components/card/ItemList";
import MenuContext from "../context/menuContext";

const ListaPlatos = () => {
  const { platosSelected, infoScoreMenu } = useContext(MenuContext);

  if (platosSelected.length === 0) {
    return (
      <MessageAlert
        message=" Aún no tienes platos seleccionados, por favor busca tu receta favorita"
        color={"info"}
        heading="Bienvenido!!!"
      />
    );
  }

  return (
    <>
      <Row className="mt-2 mb-5 d-flex justify-content-center">
        {platosSelected.length !== 0 && (
          <Col className="d-flex justify-content-center" sm={12}>
            <ScoreAverageAndAcumulations infoScoreMenu={infoScoreMenu} />
          </Col>
        )}

        {platosSelected.map((item, idx) => (
          <Col
            key={idx}
            className="d-flex justify-content-center"
            sm={6}
            lg={3}
          >
            <ItemList item={item} from="lista" />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ListaPlatos;
