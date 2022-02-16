import React, { useContext } from 'react'
import { Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import back from '../../assets/img/back.png'
import MenuContext from '../../context/menuContext';
const ButtonBack = () => {

    const {setShowPage} = useContext(MenuContext)

    const renderTooltip = (props) => (
        <Tooltip id="tooltip-top" {...props}>
          Volver listado de platos
        </Tooltip>
      );

      const returnHandler = () => {
        setShowPage(0)
      }
  return (
    <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="outline-primary" onClick={returnHandler}>
      <Image src={back} style={{ width: "1.5rem" }} />
    </Button>
  </OverlayTrigger>
  )
}

export default ButtonBack