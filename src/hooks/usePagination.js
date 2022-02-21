import React, { useEffect, useState } from "react";
import methodsApi from "server/axios";

const INITIAL_PAGE = 0;
function usePagination(setResultSearch) {
  // paginacion
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingSearchFood, setLoadingSearchFood] = useState(false);
  const [disabledButtonMoreRecipes, setDisabledButtonMoreRecipes] =
    useState(false);
  const [inputSearch, setInputSearch] = useState(null);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingSearchFood(true);

    const addPage = async () => {
      const fetch = await methodsApi.getRecipes(inputSearch, page);
      console.log("fetch", fetch);
      if (fetch.results.length === 0) {
        // si me retorna un results vacio, es por que ya NO hay mas items
        setDisabledButtonMoreRecipes(true);
      } else {
        setDisabledButtonMoreRecipes(false);
        setResultSearch(fetch.results);
      }
    };
    console.log("inputSearch effect usePagination", inputSearch);
    if (inputSearch) {
      addPage();
    }

    return () => {
      console.log("desmontando effect de usePagination");
    };
  }, [page, inputSearch]);

  return {
    page,
    setPage,
    loadingSearchFood,
    setLoadingSearchFood,
    disabledButtonMoreRecipes,
    inputSearch,
    setInputSearch,
  };
}

export default usePagination;
