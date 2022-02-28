import MenuContext from "context/menuContext";
import React, { useContext } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { buttonsPages } from "helper/pages/buttonPages";

const ToggleBtnGroup = ({ handleToggleBtnClick }) => {

  const { btnsActionsValue, setBtnsActionsValue } = useContext(MenuContext);
  
  const buttonsActions = buttonsPages();

  return (
    <ButtonGroup className="mt-2 col col-12">
      {buttonsActions.map((elements, idx) => (
        <ToggleButton
          key={idx}
          id={`btns-actions-${idx}`}
          type="radio"
          variant={elements.variant}
          name="btns"
          value={elements.value}
          checked={btnsActionsValue === elements.value}
          onChange={(e) => setBtnsActionsValue(e.currentTarget.value)}
          className={`${idx !== 0 && "ms-2"}`}
          onClick={() => handleToggleBtnClick(elements)}
        >
          {elements.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ToggleBtnGroup;
