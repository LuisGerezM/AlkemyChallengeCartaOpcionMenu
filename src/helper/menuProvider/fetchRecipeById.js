import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";
import methodsApi from "server/axios";

export default async function fetchRecipeById(
  id,
  setDetailsRecipeSelected,
  handleToggleBtnClick,
  setLoadingSelectedDetails
) {
  try {
    const fetch = await methodsApi.getRecipeById(id);

    if (fetch.status === 200) {
      if (fetch.data === [])
        throw new Error(`Vaya ocurrió un error al buscar la receta`);

      setDetailsRecipeSelected(fetch.data);
    } else {
      throw new Error(`Vaya ocurrió un error inesperado ${fetch.status}`);
    }
  } catch (error) {
    sweetAlertMsg("error", `${error}`, "Atención");
    handleToggleBtnClick({ page: "buscador-plato" });
  } finally {
    setLoadingSelectedDetails(false);
  }
}
