import axios from "axios";

// en las URLS, cuando uso el offset lo hago para la paginacion, con esto le digo cuantos resultados se tiene que saltar de los que me vaya a devolver. si en la primera pagina tenemos 25 resultados, para la segunda pagina tienes que saltarte 25 y devolverme desde el 25 al 50. limit es el nro de resultados que me va a devolver.

const baseUrl = "http://challenge-react.alkemy.org/";
const baseUrl2 = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "be0e1c28da614b94b6d063df90ccc58a";

const getUser = async (user) => {
  //console.log("user", user);
  const request = await axios.post(baseUrl, user);
  return request;
};

// https://dev.to/tutrinh/basic-using-async-and-await-with-axios-ad5 --> const response = await axios.get('url')

// https://api.spoonacular.com/recipes/complexSearch?apiKey=be0e1c28da614b94b6d063df90ccc58a&query=burger&number=4&addRecipeInformation=true

// Este anda - sin paginacion
// const getRecipes = async (recipe) => {
//   const request = await axios.get(
//     `${baseUrl2}?apiKey=${apiKey}&query=${recipe}&number=4&addRecipeInformation=true`
//   );
//   return request;
// };

// poninedole paginacion
const getRecipes = async (recipe, page = 0, number = 4) => {
  console.log("recipe, page", recipe, " - ", page);
  const request = await axios.get(
    `${baseUrl2}?apiKey=${apiKey}&query=${recipe}&number=${number}&offset=${
      page * number
    }&addRecipeInformation=true`
  );
  return request;
};

const methodsApi = { getUser, getRecipes };
export default methodsApi;
