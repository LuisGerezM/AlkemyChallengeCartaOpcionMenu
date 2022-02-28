import { sweetAlertMsg } from "helper/sweetAlerts/sweetAlertMsg";
import methodsApi from "server/axios";

export default async function searchRecipe(recipe, setLoadingSearchFood) {
  try {
    const fetch = await methodsApi.getRecipes(recipe);

    if (fetch.status === 200) return fetch.data;
    console.log("llega al throw");
    throw new Error("Vaya ocurrió un error inesperado");
  } catch (error) {
    console.log("error en cath fetchRecipes", error);
    sweetAlertMsg("error", `${error}`, "Atención");
  } finally {
    setLoadingSearchFood(false);
  }
}
