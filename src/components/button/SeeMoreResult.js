import usePagination from "hooks/usePagination";
import React from "react";
import CustomButton from "./CustomButton";

const SeeMoreResult = () => {
  const { disabledButtonMoreRecipes, setPage } = usePagination();

  const handlerMoreResult = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <CustomButton
      variant="primary"
      text="Ver más resultados"
      handleClickButton={handlerMoreResult}
      disabledBtn={disabledButtonMoreRecipes && true}
    />
  );
};

export default SeeMoreResult;
