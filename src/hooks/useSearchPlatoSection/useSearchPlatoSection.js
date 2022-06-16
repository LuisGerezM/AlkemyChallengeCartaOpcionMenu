import { updateInformationMenu } from "helper/helpMenuProvider/helpInformationMenu";
import { helpSweetAlertMsg } from "helper/helpSweetAlerts/helpSweetAlertMsg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import methodsApi from "server/axios";

export const useSearchPlatoSection = (setResultSearch, setBtnsActionsValue) => {
  // ////// navegación entre secciones - pages //////
  let navigate = useNavigate();

  const handleToggleBtnClick = (element) => {
    const { page } = element;
    navigate(page);
  };
  // ////// fin navegación entre secciones //////

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

  // ////// seccion buscar-plato  //////

  // ----- acciones items receta (cards) BUSCADOR-platos o DETALLES-plato -----

  // --> agregar una receta en BUSCADOR-platos o DETALLES-plato -----
  const handlerAddItem = (item) => {
    if (item.vegan) {
      // control platos veganos
      if (platosVeganoSeleccionado === 2)
        return helpSweetAlertMsg(
          "error",
          "Ya tienes tu menu con 2 comidas veganas 😁",
          "Atención"
        );

      setPlatosSelected((platosVeganoSeleccionado) => [
        ...platosVeganoSeleccionado,
        item,
      ]);
      setPlatosVeganoSeleccionado(
        (prevPlatoVeganoSel) => prevPlatoVeganoSel + 1
      );
      helpSweetAlertMsg(
        "success",
        `Plato ${item.title} agregado correctamente - Plato dieta vegana`,
        "Felicitaciones"
      );
    } else {
      // control platos no veganos
      if (platosOtrasDietas === 2)
        return helpSweetAlertMsg(
          "error",
          "Ya tienes tu menu con 2 comidas no veganas 😁",
          "Atención"
        );

      setPlatosSelected((prevPlatosSelected) =>
        prevPlatosSelected.concat(item)
      );
      setPlatosOtrasDietas((prevPlatoOtraDieta) => prevPlatoOtraDieta + 1);
      helpSweetAlertMsg(
        "success",
        `Plato ${item.title} agregado correctamente`,
        "Felicitaciones"
      );
    }
  };
  // --> fin agregar una receta en BUSCADOR-platos o DETALLES-plato -----

  // ----- manejador patos seleccionados -----
  function cehckNumberOfPlatos(
    platosSelected,
    setStateBtnAdd,
    setResultSearch,
    setBtnsActionsValue,
    navigate
  ) {
    if (platosSelected.length === 4) {
      // deshabilitamos btn add
      setStateBtnAdd(true);

      helpSweetAlertMsg(
        "info",
        "Ya tienes tu menu con 4 comidas 😁",
        "Felicitaciones"
      );
      setResultSearch([]);
      setBtnsActionsValue("1");
      return navigate("lista-platos");
    }

    if (platosSelected.length === 0) {
      // eliminamos todos platos seleccionados
      setResultSearch([]);
    }

    // habilitamos btn
    return setStateBtnAdd(false);
  }

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
    from === "lista" ? setActionBtnDetails(1) : setActionBtnDetails(2);

    // en detalles-plato disableamos btn toogle
    setBtnsActionsValue("3");

    const { id } = item;
    setLoadingSelectedDetails(true);
    setIdRecipeSelected(id);
    handleToggleBtnClick({ page: "detalles-plato" });
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
  async function fetchRecipeById(
    id,
    setDetailsRecipeSelected,
    handleToggleBtnClick,
    setLoadingSelectedDetails
  ) {
    try {
      const fetch = await methodsApi.getRecipeById(id);

      if (fetch.status === 200) {
        if (fetch.data === [])
          throw new Error(`Vaya ocurrió un error al buscar la receta`);

        setDetailsRecipeSelected(fetch.data);
      } else {
        throw new Error(`Vaya ocurrió un error inesperado ${fetch.status}`);
      }
    } catch (error) {
      helpSweetAlertMsg("error", `${error}`, "Atención");
      handleToggleBtnClick({ page: "buscador-plato" });
    } finally {
      setLoadingSelectedDetails(false);
    }
  }

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

  return {
    platosSelected,
    setPlatosSelected,
    setConfirmDeleteRecipe,
    setPlatosVeganoSeleccionado,
    setPlatosOtrasDietas,
    handleToggleBtnClick,
    handlerAddItem,
    handlerShowItem,
    loadingSelectedDetails,
    detailsRecipeSelected,
    stateBtnAdd,
    actionBtnDetails,
    infoScoreMenu,
  };
};
