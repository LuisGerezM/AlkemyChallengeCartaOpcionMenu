import React, { useEffect, useState } from "react";
import { INITIAL_PAGE } from "helper/constValues";
import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";
import { useNavigate } from "react-router-dom";
import MenuContext from ".";
import methodsApi from "../../server/axios";
import { updateInformationMenu } from "helper/menuProvider/informationMenu";
import { sweetAlertConfirmSaveToken } from "helper/sweetAlerts/sweetAlertConfirmMsg";
import addRecipe from "helper/menuProvider/addRecipe";
import showRecipe from "helper/menuProvider/showRecipe";
import searchRecipe from "helper/menuProvider/searchRecipe";

const MenuProvider = ({ children }) => {
  // ////// states seccion lista //////

  // score MENU recetas en lista-platos
  const [infoScoreMenu, setInfoScoreMenu] = useState({});

  // platos seleccionado por usuario <= 4
  const [platosSelected, setPlatosSelected] = useState([]);

  // vegano <= 2
  const [platosVeganoSeleccionado, setPlatosVeganoSeleccionado] = useState(0);
  // otras dieras <= 2
  const [platosOtrasDietas, setPlatosOtrasDietas] = useState(0);

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

  // estado usado para cuándo se confirme que se eliminó una recetea desde page detalle
  const [confirmDeleteRecipe, setConfirmDeleteRecipe] = useState(false);

  // ////// fin states seccion detalles //////

  // ////// estado disabled boton agregar //////
  const [stateBtnAdd, setStateBtnAdd] = useState(false);
  // ////// fin  estado disabled boton agregar //////

  // ////// accion (add or delete) boton en pagina detalle  //////
  const [actionBtnDetails, setActionBtnDetails] = useState(0);
  // ////// fin  estado disabled boton agregar //////

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
    //setLoadingSearchFood
    return searchRecipe(recipe, setLoadingSearchFood);
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

    // CAPA q hay q cambiar esto ... que NO sea con el input search.. aunque pueda ser que NO necesite usar un if aqui.. probar
    if (inputSearch) {
      // const fetchMore = async () => {
      //   await
      // }
      // fetchMore();
      addPage(inputSearch);
    }

    return () => {
      console.log("desmonanto effect de menuProvider - page");
    };
  }, [page]);
  // ----- fin busquedas agregando página -----

  // ----- Acciones items receta (cards) BUSCADOR-platos o DETALLES-plato -----

  // --> Agregar una receta en BUSCADOR-platos o DETALLES-plato
  const handlerAddItem = (item) => {
    // console.log("item", item);
    addRecipe(
      item,
      setPlatosVeganoSeleccionado,
      setPlatosSelected,
      setPlatosOtrasDietas,
      platosVeganoSeleccionado,
      platosOtrasDietas
    );
  };

  useEffect(() => {
    // maximo 4 platos en el menu --> hecho en un effecto
    // console.log("platosSelected CAMBIOOO", platosSelected);

    if (platosSelected.length === 4) {
      // deshabilitamos el BOTON agregar cuándo sea 4 ya
      setStateBtnAdd(true);
      sweetAlertMsg(
        "info",
        "Ya tienes tu menu con 4 comidas 😁",
        "Felicitaciones"
      );
      setResultSearch([]);
      navigate("lista-platos");
    }

    if (platosSelected.length === 0) {
      // habilitamos el BOTON agregar cuándo sea 4 ya
      setStateBtnAdd(false);
      setResultSearch([]);
    }
    setStateBtnAdd(false);

    // trabajamos la información del menu total
    setInfoScoreMenu(updateInformationMenu(platosSelected));

    return () => {
      // console.log("desmontando efecto MenuProvider - platosSelected");
    };
  }, [platosSelected]);

  // PRUEBASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS: Cauliflower y hamburger
  // --> Ver detalle receta en LISTA y BUSCADOR platos
  const handlerShowItem = (item, from) => {
    // from indica desde dónde lo estamos llamando al show; si es desde buscador o lista para renderizar el boton de add o de eliminar
    // console.log("from", from);
    showRecipe(
      item,
      from,
      setActionBtnDetails,
      setBtnsActionsValue,
      setLoadingSelectedDetails,
      setIdRecipeSelected,
      handleToggleBtnClick
    );

    /*setActionBtnDetails
setBtnsActionsValue
setLoadingSelectedDetails
setIdRecipeSelected
handleToggleBtnClick */
  };

  // efecto para cuándo se elimine una receta dese page detalles - se redirecciona a lista-platos
  useEffect(() => {
    if (confirmDeleteRecipe) {
      navigate("lista-platos");
      setConfirmDeleteRecipe(false);
    }

    return () => {
      console.log("desmontando efecto de confirmDeleteRecipe en MenuProvider");
    };
  }, [confirmDeleteRecipe]);

  // --- busqueda de receta por id --//
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

          console.log("fetch.data en effect");
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

  // ////// fin seccion buscar-plato  //////

  // ////// seccion lista-plato  //////

  // ----- score MENU recetas en lista-platos -----

  // ----- score MENU recetas en lista-platos -----

  // ----- Eliminar receta en lista-platos -----

  const handlerDeleteItem = (item, from) => {
    sweetAlertConfirmSaveToken(
      "Estás seguro que deseas eliminar esta receta del Menu?",
      "question",
      "Elminar",
      "Cancelar",
      "Receta eliminada correctamente",
      "Esta receta seguirá estando en tu menu",
      item,
      platosSelected,
      setPlatosSelected,
      from,
      setConfirmDeleteRecipe,
      setPlatosVeganoSeleccionado,
      setPlatosOtrasDietas
    );
  };

  // ////// fin seccion lista-plato  //////

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
        stateBtnAdd,
        actionBtnDetails,
        infoScoreMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
