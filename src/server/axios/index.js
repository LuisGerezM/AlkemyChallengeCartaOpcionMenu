import axios from "axios";

const getUser = async (user) => {
  const request = await axios.post(process.env.REACT_APP_BASEURL_ALKEMY, user);
  return request;
};

// paginacion
const getRecipes = async (recipe, page = 0, number = 6) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASEURL_API}complexSearch?apiKey=${
      process.env.REACT_APP_FIREBASE_APIKEY
    }&query=${recipe}&number=${number}&offset=${
      page * number
    }&addRecipeInformation=true`
  );
  return request;
};

// busca receta por id
const getRecipeById = async (recipeId) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASEURL_API}${recipeId}/information?apiKey=${process.env.REACT_APP_FIREBASE_APIKEY}`
  );
  return request;
};

const methodsApi = { getUser, getRecipes, getRecipeById };
export default methodsApi;
