import React, { useEffect, useState } from "react";
import { INITIAL_PAGE } from "helper/constValues";
import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";
import { useNavigate } from "react-router-dom";
import MenuContext from ".";
import methodsApi from "../../server/axios";

const MenuProvider = ({ children }) => {
  // es para los platos que da ADD el usuario. CHEQUEAR que plato VEGANo no sea 2.
  const [platosSelected, setPlatosSelected] = useState([]);

  const [platoVeganoSeleccionado, setPlatoVeganoSeleccionado] = useState(0);

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

  // pages
  const [btnsActionsValue, setBtnsActionsValue] = useState("1");
  let navigate = useNavigate();

  const handleToggleBtnClick = (element) => {
    setBtnsActionsValue("3"); // con esto hacemos que NO esté seleccionado ningun boton del toogle
    // console.log(element);
    const { page } = element;
    // console.log("page in handle toogle btn click", page);
    //setClickToggleBtn(value);
    navigate(page);
  };

  const fetchRecipes = async (recipe) => {
    try {
      const fetch = await methodsApi.getRecipes(recipe);

      if (fetch.status === 200) return fetch.data;
      console.log("llega al throw");
      throw new Error("Vaya ocurrió un error inesperado");
    } catch (error) {
      console.log("error en cath fetchRecipes", error);
      sweetAlertMsg("error", `${error}`, "Atención");
      // return { error };
    } finally {
      setLoadingSearchFood(false);
    }
  };

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    const addPage = async (recipe) => {
      // console.log("page in addPage", page);
      try {
        // DESPUES PENSAR, QUIZA pueda pasarle para que me DEVUELVA 6 en la busqueda.
        const fetch = await methodsApi.getRecipes(recipe, page);
        // console.log("fetch", fetch);
        if (fetch.status === 200) {
          if (fetch.data.results.length === 0) {
            // si me retorna un results vacio, es por que ya NO hay mas items
            setDisabledButtonMoreRecipes(true);
            sweetAlertMsg("error", "Ya no quedan recetas 😁", "Atención");
          } else {
            setDisabledButtonMoreRecipes(false);
            setResultSearch((prevResults) =>
              prevResults.concat(fetch.data.results)
            );
          }
        } else {
          throw new Error("Vaya ocurrió un error inesperado");
        }
      } catch (error) {
        console.log("error en cath add page", error);
        sweetAlertMsg("error", `${error}`, "Atención");
      } finally {
        setLoadingSearchFood(false);
      }
    };

    setLoadingSearchFood(true);

    // const addPage = async () => {
    //   const fetch = await methodsApi.getRecipes(inputSearch, page);
    //   console.log("fetch", fetch);
    //   if (fetch.results.length === 0) {
    //     // si me retorna un results vacio, es por que ya NO hay mas items
    //     setDisabledButtonMoreRecipes(true);
    //   } else {
    //     setDisabledButtonMoreRecipes(false);
    //     setResultSearch(fetch.results);
    //   }
    // };

    if (inputSearch) {
      // const fetchMore = async () => {
      //   await
      // };
      // fetchMore();
      addPage(inputSearch);
    }

    return () => {
      console.log("desmonanto effect de menuProvider");
    };
  }, [page]);

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
        handleToggleBtnClick,
        btnsActionsValue,
        setBtnsActionsValue,
        INITIAL_PAGE,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
