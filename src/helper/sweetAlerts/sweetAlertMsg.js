import Swal from "sweetalert2";

export function sweetAlertMsg(msg) {
  Swal.fire({
    icon: "error",
    title: "Oops... Error",
    text: `${msg}`,
    timer: 2500
  });
}
