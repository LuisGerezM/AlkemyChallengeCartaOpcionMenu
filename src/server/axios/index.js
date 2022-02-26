import axios from "axios";

// en las URLS, cuando uso el offset lo hago para la paginacion, con esto le digo cuantos resultados se tiene que saltar de los que me vaya a devolver. si en la primera pagina tenemos 25 resultados, para la segunda pagina tienes que saltarte 25 y devolverme desde el 25 al 50. limit es el nro de resultados que me va a devolver.

// const baseUrl = "http://challenge-react.alkemy.org/";
// const baseUrl2 = "https://api.spoonacular.com/recipes/";
// const apiKey = "be0e1c28da614b94b6d063df90ccc58a";

const getUser = async (user) => {
  // console.log("user", user);
  // console.log('process.env.REACT_APP_BASEURL_ALKEMY', process.env.REACT_APP_BASEURL_ALKEMY)
  const request = await axios.post(process.env.REACT_APP_BASEURL_ALKEMY, user);
  return request;
};

// paginacion
const getRecipes = async (recipe, page = 0, number = 6) => {
  // console.log('page y number', page, ' - ', number)
  // console.log("recipe, page", recipe, " - ", page);
  const request = await axios.get(
    `${process.env.REACT_APP_BASEURL_API}complexSearch?apiKey=${
      process.env.REACT_APP_FIREBASE_APIKEY
    }&query=${recipe}&number=${number}&offset=${
      page * number
    }&addRecipeInformation=true`
  );
  return request;
};

// https://api.spoonacular.com/recipes/1697645/information?apiKey=be0e1c28da614b94b6d063df90ccc58a

// busca receta por id
const getRecipeById = async (recipeId) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASEURL_API}${recipeId}/information?apiKey=${process.env.REACT_APP_FIREBASE_APIKEY}`
  );
  return request;
};

const methodsApi = { getUser, getRecipes, getRecipeById };
export default methodsApi;
