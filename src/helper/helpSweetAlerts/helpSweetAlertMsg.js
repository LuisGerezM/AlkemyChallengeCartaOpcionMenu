import Swal from "sweetalert2";

export function helpSweetAlertMsg(icon, msg, title) {
  Swal.fire({
    icon: `${icon}`,
    title: `${title}`,
    text: `${msg}`,
    timer: 3000,
  });
}
