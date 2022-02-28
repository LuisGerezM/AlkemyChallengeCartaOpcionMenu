import Swal from "sweetalert2";

export function sweetAlertConfirmSaveToken(readToken) {
  Swal.fire({
    icon: "question",
    title: "Deseas guardar sus datos para el próximo inicio de sesión?",
    showDenyButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `Eliminar`,
  }).then((result) => {
    if (result.isConfirmed) {
      // dejamos datos del localstorage
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos Guardados correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (result.isDenied) {
      // eliminamos datos del localstorage
      window.localStorage.removeItem("logged-carta-opcionmenu");
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Datos eliminados!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    readToken({ token: "", email: "" });
  });
}
