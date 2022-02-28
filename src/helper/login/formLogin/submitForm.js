async function submitForm(
  event,
  setDataUser,
  setErrorValidated,
  setLoadingLogin
) {
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    event.stopPropagation();
    setErrorValidated(true);
    return;
  }

  setLoadingLogin(true);

  let email = event.target.email.value;
  let password = event.target.password.value;

  setDataUser({ email, password });
}

export default submitForm;
