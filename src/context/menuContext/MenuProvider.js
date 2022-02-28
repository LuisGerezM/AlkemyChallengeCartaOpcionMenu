import React, { useEffect, useState } from "react";
import { INITIAL_PAGE } from "helper/constValues";
import { useNavigate } from "react-router-dom";
import MenuContext from ".";
import { updateInformationMenu } from "helper/menuProvider/informationMenu";
import { sweetAlertConfirmSaveToken } from "helper/sweetAlerts/sweetAlertConfirmMsg";
import addRecipe from "helper/menuProvider/addRecipe";
import showRecipe from "helper/menuProvider/showRecipe";
import searchRecipe from "helper/menuProvider/searchRecipe";
import addPage from "helper/menuProvider/addPage";
import cehckNumberOfPlatos from "helper/menuProvider/checkNumberOfPlatos";
import fetchRecipeById from "helper/menuProvider/fetchRecipeById";

const MenuProvider = ({ children }) => {
  // ////// states seccion lista //////

  // ----- score MENU recetas en lista-platos -----
  const [infoScoreMenu, setInfoScoreMenu] = useState({});

  // ----- platos seleccionado por usuario <= 4 -----
  const [platosSelected, setPlatosSelected] = useState([]);

  // ----- vegano <= 2 -----
  const [platosVeganoSeleccionado, setPlatosVeganoSeleccionado] = useState(0);
  // ----- otras dietas <= 2 -----
  const [platosOtrasDietas, setPlatosOtrasDietas] = useState(0);

  // ////// fin states seccion lista //////

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

  // ////// states seccion detalles //////

  // ----- receta seleccionada -----
  const [detailsRecipeSelected, setDetailsRecipeSelected] = useState(null);
  const [loadingSelectedDetails, setLoadingSelectedDetails] = useState(false);
  const [idRecipeSelected, setIdRecipeSelected] = useState(null);

  // ----- confirmar eliminar recetea desde -> page detalle -----
  const [confirmDeleteRecipe, setConfirmDeleteRecipe] = useState(false);

  // ////// fin states seccion detalles //////

  // ////// estado disabled boton agregar busqueda-plato & detalle-plato //////
  const [stateBtnAdd, setStateBtnAdd] = useState(false);
  // ////// fin estado disabled boton agregar //////

  // ////// accion (add or delete) boton en pagina detalle  //////
  const [actionBtnDetails, setActionBtnDetails] = useState(0);
  // ////// fin accion (add or delete) boton en pagina detalle //////

  // ////// navegación entre secciones - pages //////
  let navigate = useNavigate();

  const handleToggleBtnClick = (element) => {
    const { page } = element;
    navigate(page);
  };
  // ////// fin navegación entre secciones //////

  // ////// seccion buscar-plato  //////

  // ----- primeras busquedas -----
  const fetchRecipes = async (recipe) => {
    return searchRecipe(recipe, setLoadingSearchFood);
  };
  // ----- fin primeras busquedas -----

  // ----- busquedas agregando página -----
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

  // ----- acciones items receta (cards) BUSCADOR-platos o DETALLES-plato -----

  // --> agregar una receta en BUSCADOR-platos o DETALLES-plato -----
  const handlerAddItem = (item) => {
    addRecipe(
      item,
      setPlatosVeganoSeleccionado,
      setPlatosSelected,
      setPlatosOtrasDietas,
      platosVeganoSeleccionado,
      platosOtrasDietas
    );
  };
  // --> fin agregar una receta en BUSCADOR-platos o DETALLES-plato -----

  // ----- manejador patos seleccionados -----
  useEffect(() => {
    cehckNumberOfPlatos(
      platosSelected,
      setStateBtnAdd,
      setResultSearch,
      setBtnsActionsValue,
      navigate
    );

    setInfoScoreMenu(updateInformationMenu(platosSelected));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platosSelected]);
  //------ fin manejador patos seleccionados -----

  // --> Ver detalle receta en LISTA y BUSCADOR platos
  const handlerShowItem = (item, from) => {
    // from -> page dónde llamamos la fción
    showRecipe(
      item,
      from,
      setActionBtnDetails,
      setBtnsActionsValue,
      setLoadingSelectedDetails,
      setIdRecipeSelected,
      handleToggleBtnClick
    );
  };

  // se eliminar receta desde 'detalles-plato' -> redirecciona a 'lista-platos'
  useEffect(() => {
    if (confirmDeleteRecipe) {
      navigate("lista-platos");
      setConfirmDeleteRecipe(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmDeleteRecipe]);

  // --- busqueda de receta por id --//
  useEffect(() => {
    if (idRecipeSelected) {
      fetchRecipeById(
        idRecipeSelected,
        setDetailsRecipeSelected,
        handleToggleBtnClick,
        setLoadingSelectedDetails
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRecipeSelected]);

  // ---------- fin Acciones items receta (cards) ---------

  // ////// fin seccion buscar-plato  //////

  // ////// seccion lista-plato  //////

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
