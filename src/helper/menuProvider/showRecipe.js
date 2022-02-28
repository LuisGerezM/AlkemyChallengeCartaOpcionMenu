export default function showRecipe(
  item,
  from,
  setActionBtnDetails,
  setBtnsActionsValue,
  setLoadingSelectedDetails,
  setIdRecipeSelected,
  handleToggleBtnClick
) {
  from === "lista" ? setActionBtnDetails(1) : setActionBtnDetails(2);

  // en detalles-plato disableamos btn toogle
  setBtnsActionsValue("3");

  const { id } = item;
  setLoadingSelectedDetails(true);
  setIdRecipeSelected(id);
  handleToggleBtnClick({ page: "detalles-plato" });
}
