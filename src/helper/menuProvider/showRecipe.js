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

  // console.log("item", item);

  setBtnsActionsValue("3"); // con esto hacemos que NO esté seleccionado ningun boton del toogle
  // console.log("item", item);

  const { id } = item;
  setLoadingSelectedDetails(true);
  setIdRecipeSelected(id);
  handleToggleBtnClick({ page: "detalles-plato" });
}
