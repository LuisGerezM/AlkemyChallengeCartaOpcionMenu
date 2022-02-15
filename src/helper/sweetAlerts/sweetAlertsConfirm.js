import Swal from "sweetalert2";

export function sweetAlertConfirm(readToken) {
  Swal.fire({
    icon: "question",
    title: "Deseas guardar sus datos para el próximo inicio de sesión?",
    showDenyButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `Eliminar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos Guardados!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (result.isDenied) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Datos eliminados!",
        showConfirmButton: false,
        timer: 1500,
      });
      // eliminamos datos del localstorage
      window.localStorage.removeItem("logged-carta-opcionmenu");
    }
    readToken({ token: "", email: "" });
  });
}
