import React, { useState } from "react";
import MenuContext from ".";
import methodsApi from "../../server/axios";

const INITIAL_PAGE = 0;
const MenuProvider = ({ children }) => {
  const [platosSelected, setPlatosSelected] = useState([]);

  // Este loading ver si se lo va a dejar o no
  const [loadingList, setLoadingList] = useState(false);

  // resultado busqueda receta
  const [resultSearch, setResultSearch] = useState([]);

  // paginacion
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingSearchFood, setLoadingSearchFood] = useState(false);
  const [disabledButtonMoreRecipes, setDisabledButtonMoreRecipes] =
    useState(false);
  const [inputSearch, setInputSearch] = useState(null);

  const fetchRecipes = async (recipe) => {
    try {
      const fetch = await methodsApi.getRecipes(recipe);

      if (fetch.status === 200) return fetch.data;

      throw new Error("Vaya ocurrió un error inesperado");
    } catch (error) {
      return { error };
    }
  };

  const addPage = async (recipe) => {
    const fetch = await methodsApi.getRecipes(recipe, page);
    console.log("fetch", fetch);
    if (fetch.results.length === 0) {
      // si me retorna un results vacio, es por que ya NO hay mas items
      setDisabledButtonMoreRecipes(true);
    } else {
      setDisabledButtonMoreRecipes(false);
      setResultSearch(fetch.results);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        platosSelected,
        fetchRecipes,
        loadingList,
        setLoadingList,
        page,
        setPage,
        loadingSearchFood,
        setLoadingSearchFood,
        disabledButtonMoreRecipes,
        setDisabledButtonMoreRecipes,
        inputSearch,
        setInputSearch,
        resultSearch,
        setResultSearch,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
