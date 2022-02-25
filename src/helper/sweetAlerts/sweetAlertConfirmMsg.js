import Swal from "sweetalert2";

export function sweetAlertConfirmSaveToken(
  title,
  icon,
  confirmButtonText,
  denyButtonText,
  titleConfirm,
  titleDenied,
  item,
  platosSelected = null,
  setPlatosSelected = null,
  from,
  setConfirmDeleteRecipe,
  setPlatosVeganoSeleccionado,
  setPlatosOtrasDietas
) {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    showDenyButton: true,
    confirmButtonText: `${confirmButtonText}`,
    denyButtonText: `${denyButtonText}`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: `${titleConfirm}`,
        showConfirmButton: false,
        timer: 1500,
      });

      const { id, vegan } = item;

      setPlatosSelected(platosSelected.filter((element) => element.id !== id));

      // descontamos 1 a contadores de receta
      vegan
        ? setPlatosVeganoSeleccionado(
            (prevPlatoVeganoSel) => prevPlatoVeganoSel - 1
          )
        : setPlatosOtrasDietas((prevPlatoOtraDieta) => prevPlatoOtraDieta - 1);

      if (from === "detalle") setConfirmDeleteRecipe(true);
    } else if (result.isDenied) {
      Swal.fire({
        position: "bottom-end",
        icon: "info",
        title: `${titleDenied}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}
