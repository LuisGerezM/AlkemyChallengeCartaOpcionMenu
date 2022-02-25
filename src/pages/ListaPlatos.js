import MessageAlert from "components/alerts/MessageAlert";
import ScoreAverageAndAcumulations from "components/card/ScoreAverageAndAcumulations";
import React, { useContext, useState } from "react";
import { Button, Col, Row, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/button/CustomButton";
import ItemList from "../components/card/ItemList";
import MenuContext from "../context/menuContext";

const ListaPlatos = () => {
  const { platosSelected, loadingList, setLoadingList, infoScoreMenu } =
    useContext(MenuContext);

  console.log("platosSelected ListaPlatos.js", platosSelected);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  if (platosSelected.length === 0) {
    return (
      <MessageAlert
        message=" Aún no tienes platos seleccionados, por favor busca tu receta favorita"
        color={"info"}
        heading="Atención!!!"
      />
    );
  }

  return (
    <>
      <Row className="mt-2 mb-5 d-flex justify-content-center">
        {platosSelected.length !== 0 && (
          <Col className="d-flex justify-content-center" sm={12}>
            <ScoreAverageAndAcumulations infoScoreMenu={infoScoreMenu}/>
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
