import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";

function addRecipe(
  item,
  setPlatosVeganoSeleccionado,
  setPlatosSelected,
  setPlatosOtrasDietas,
  platosVeganoSeleccionado,
  platosOtrasDietas
) {
  if (item.vegan) {
    // control platos veganos
    if (platosVeganoSeleccionado === 2)
      return sweetAlertMsg(
        "error",
        "Ya tienes tu menu con 2 comidas veganas 😁",
        "Atención"
      );

    setPlatosSelected((platosVeganoSeleccionado) => [
      ...platosVeganoSeleccionado,
      item,
    ]);
    setPlatosVeganoSeleccionado((prevPlatoVeganoSel) => prevPlatoVeganoSel + 1);
    sweetAlertMsg(
      "success",
      `Plato ${item.title} agregado correctamente - Plato dieta vegana`,
      "Felicitaciones"
    );
  } else {
    // control platos no veganos
    if (platosOtrasDietas === 2)
      return sweetAlertMsg(
        "error",
        "Ya tienes tu menu con 2 comidas no veganas 😁",
        "Atención"
      );

    setPlatosSelected((prevPlatosSelected) => prevPlatosSelected.concat(item));
    setPlatosOtrasDietas((prevPlatoOtraDieta) => prevPlatoOtraDieta + 1);
    sweetAlertMsg(
      "success",
      `Plato ${item.title} agregado correctamente`,
      "Felicitaciones"
    );
  }
}

export default addRecipe;
