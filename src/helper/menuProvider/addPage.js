import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";
import methodsApi from "server/axios";

// recipe = inputSearch
const addPage = async (
  recipe,
  page,
  setDisabledButtonMoreRecipes,
  setLoadingSearchFood,
  setResultSearch
) => {
  try {
    const fetch = await methodsApi.getRecipes(recipe, page);

    if (fetch.status === 200) {
      if (fetch.data.results.length === 0) {
        // no hay más recetas
        setDisabledButtonMoreRecipes(true);
        sweetAlertMsg("error", "Ya no quedan recetas 😁", "Atención");
      } else {
        setDisabledButtonMoreRecipes(false);
        setResultSearch((prevResults) =>
          prevResults.concat(fetch.data.results)
        );
      }
    } else {
      throw new Error(`Vaya ocurrió un error inesperado ${fetch.status}`);
    }
  } catch (error) {
    console.log("error en cath add page", error);
    sweetAlertMsg("error", `${error}`, "Atención");
  } finally {
    setLoadingSearchFood(false);
  }
};

export default addPage;
