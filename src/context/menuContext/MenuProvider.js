import { INITIAL_PAGE } from "helper/helpConstValues";
import MenuContext from ".";
import { helpSweetAlertConfirmMsg } from "helper/helpSweetAlerts/helpSweetAlertConfirmMsg";
import { useSearchMenuSection } from "hooks/useSearchMenuSection/useSearchMenuSection";
import { useSearchPlatoSection } from "hooks/useSearchPlatoSection/useSearchPlatoSection";

const MenuProvider = ({ children }) => {
  // menu search section
  const {
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
  } = useSearchMenuSection();

  // plato search section
  const {
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
  } = useSearchPlatoSection(setResultSearch, setBtnsActionsValue);

  // ////// seccion lista-plato  //////

  // ----- Eliminar receta en lista-platos -----
  const handlerDeleteItem = (item, from) => {
    helpSweetAlertConfirmMsg(
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
