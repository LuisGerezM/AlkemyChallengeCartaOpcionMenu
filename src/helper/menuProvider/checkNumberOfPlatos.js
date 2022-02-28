import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";

export default function cehckNumberOfPlatos(
  platosSelected,
  setStateBtnAdd,
  setResultSearch,
  setBtnsActionsValue,
  navigate
) {
  if (platosSelected.length === 4) {
    // deshabilitamos btn add
    setStateBtnAdd(true);

    sweetAlertMsg(
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
