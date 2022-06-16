import { INITIAL_PAGE } from "helper/helpConstValues";
import { helpSweetAlertMsg } from "helper/helpSweetAlerts/helpSweetAlertMsg";
import { useEffect, useState } from "react";
import methodsApi from "server/axios";

export const useSearchMenuSection = () => {
  // ////// states seccion busqueda //////

  // ----- resultado busqueda receta -----
  const [resultSearch, setResultSearch] = useState([]);

  // ----- paginacion -----
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingSearchFood, setLoadingSearchFood] = useState(false);
  const [disabledButtonMoreRecipes, setDisabledButtonMoreRecipes] =
    useState(false);
  const [inputSearch, setInputSearch] = useState(null);

  // ----- pages -----
  const [btnsActionsValue, setBtnsActionsValue] = useState("1");

  // ////// fin states seccion busqueda //////

  // ----- primeras busquedas -----
  const fetchRecipes = async (recipe) => {
    try {
      const fetch = await methodsApi.getRecipes(recipe);

      if (fetch.status === 200) return fetch.data;
      throw new Error("Vaya ocurrió un error inesperado");
    } catch (error) {
      console.log("error en cath fetchRecipes", error);
      helpSweetAlertMsg("error", `${error}`, "Atención");
    } finally {
      setLoadingSearchFood(false);
    }
  };
  // ----- fin primeras busquedas -----

  // ----- busquedas agregando página -----
  // recipe = inputSearch
  const addPage = async (
    recipe,
    page,
    setDisabledButtonMoreRecipes,
    setLoadingSearchFood,
    setResultSearch
  ) => {
    try {
      const fetch = await methodsApi.getRecipes(recipe, page);

      if (fetch.status === 200) {
        if (fetch.data.results.length === 0) {
          // no hay más recetas
          setDisabledButtonMoreRecipes(true);
          helpSweetAlertMsg("error", "Ya no quedan recetas 😁", "Atención");
        } else {
          setDisabledButtonMoreRecipes(false);
          setResultSearch((prevResults) =>
            prevResults.concat(fetch.data.results)
          );
        }
      } else {
        throw new Error(`Vaya ocurrió un error inesperado ${fetch.status}`);
      }
    } catch (error) {
      console.log("error en cath add page", error);
      helpSweetAlertMsg("error", `${error}`, "Atención");
    } finally {
      setLoadingSearchFood(false);
    }
  };

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingSearchFood(true);
    addPage(
      inputSearch,
      page,
      setDisabledButtonMoreRecipes,
      setLoadingSearchFood,
      setResultSearch
    );
  }, [page, inputSearch]);
  // ----- fin busquedas agregando página -----

  return {
    fetchRecipes,
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
    btnsActionsValue,
    setBtnsActionsValue,
  };
};
