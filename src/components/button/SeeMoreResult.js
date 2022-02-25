import React, { useContext } from "react";
import MenuContext from "context/menuContext";
import CustomButton from "./CustomButton";

const SeeMoreResult = () => {
  const { setPage, disabledButtonMoreRecipes } = useContext(MenuContext);

  const handlerMoreResult = () => {
    // console.log('entrando a handle more result')
    // console.log('page en handle more result', page)
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <CustomButton
      variant="primary"
      text="Ver más resultados"
      handleClickButton={handlerMoreResult}
      disabledBtn={disabledButtonMoreRecipes && true}
      size="lg"
    />
  );
};

export default SeeMoreResult;
