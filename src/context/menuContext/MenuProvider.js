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

  // ////// states seccion lista //////
  // Este loading ver si se lo va a dejar o no
  const [loadingList, setLoadingList] = useState(false);

  // ////// fin states seccion lista //////

  // ////// states seccion busqueda //////
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

  // ////// fin states seccion busqueda //////

  // ////// states seccion detalles //////
  const [detailsRecipeSelected, setDetailsRecipeSelected] = useState(null);
  const [loadingSelectedDetails, setLoadingSelectedDetails] = useState(false);
  const [idRecipeSelected, setIdRecipeSelected] = useState(null);

  // ////// fin states seccion detalles //////

  // ////// navegación entre secciones //////
  let navigate = useNavigate();

  const handleToggleBtnClick = (element) => {
    // console.log(element);
    const { page } = element;
    // console.log("page in handle toogle btn click", page);
    //setClickToggleBtn(value);
    navigate(page);
  };
  // ////// fin navegación entre secciones //////

  // ////// seccion buscar-plato  //////

  // ----- primeras busquedas -----
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
  // ----- fin primeras busquedas -----

  // ----- busquedas agregando página -----
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
          throw new Error(`Vaya ocurrió un error inesperado ${fetch.status}`);
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
      console.log("desmonanto effect de menuProvider - page");
    };
  }, [page]);
  // ----- fin busquedas agregando página -----

  // ----- Acciones items receta (cards) -----

  // --> Agregar una receta en buscador-platos
  const handlerAddItem = (item) => {
    console.log("add");
    // console.log("item", item);
  };

  // PRUEBASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS: Cauliflower y hamburger
  // --> Ver detalle receta en LISTA y BUSCADOR platos
  const handlerShowItem = (item) => {
    setBtnsActionsValue("3"); // con esto hacemos que NO esté seleccionado ningun boton del toogle
    console.log("item", item);

    const { id } = item;
    setLoadingSelectedDetails(true);
    setIdRecipeSelected(id);
    handleToggleBtnClick({ page: "detalles-plato" });
  };

  // --- busqueda de recet por id --//
  useEffect(() => {
    const fetchRecipeById = async (id) => {
      // console.log("page in addPage", page);
      try {
        const fetch = await methodsApi.getRecipeById(id);

        if (fetch.status === 200) {
          // console.log(fetch.data.vegan);
          // console.log(fetch.data["vegan"]);

          if (fetch.data === [])
            throw new Error(`Vaya ocurrió un error al buscar la receta`);

            console.log('fetch.data en effect')
          setDetailsRecipeSelected(fetch.data);
          // handleToggleBtnClick({ page: "detalles-plato" }); // redirección
        } else {
          throw new Error(`Vaya ocurrió un error inesperado ${fetch.status}`);
        }
      } catch (error) {
        console.log("error en cath add page", error);
        sweetAlertMsg("error", `${error}`, "Atención");
        handleToggleBtnClick({ page: "buscador-plato" });
      } finally {
        setLoadingSelectedDetails(false);
      }
    };

    if (idRecipeSelected) {
      fetchRecipeById(idRecipeSelected);
    }

    return () => {
      // aqui cuando se desmonta creo que deberia poner en null d nuevo el setIdRecipeSelected(null) ;; VER Si es que es aqui o cuando hace una nueva busqueda ponerlo en null para q no entre a este if por haber guardado el valor antiguo ;;; ver porque quiza si esto se desmonta cunado cambio a detalles-plato, entonces puede ser que pierda el id y si en detalles plato quiero agregarlo no voy a poder
      console.log("desmontando efect de menuProvider - idRecperSelected");
    };
  }, [idRecipeSelected]);

  // ---------- fin Acciones items receta (cards) ---------

  // ----- fin seccion buscar-plato  -----

  // --> Eliminar receta en lista-platos
  const handlerDeleteItem = (item) => {
    console.log("delete");
    console.log("item", item);
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
        handleToggleBtnClick,
        btnsActionsValue,
        setBtnsActionsValue,
        INITIAL_PAGE,
        handlerAddItem,
        handlerShowItem,
        handlerDeleteItem,
        loadingSelectedDetails,
        detailsRecipeSelected,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
