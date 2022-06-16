import axios from "axios";

const dataAuth = process.env.REACT_APP_AUTH_CREDENTIALS.split(" ");

const getUser = async (user) => {
  // const request = await axios.post(process.env.REACT_APP_BASEURL_ALKEMY, user);
  // return request;

  // i am simulating an api call because I do not have access to the server from the github pages, only from localhost.
  const { email, password } = user;
  if (email === dataAuth[0] && password === dataAuth[1]) return {
      status: 200,
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE",
      },
    };
  else return {
    status: 401,
    message: "unauthorized",
  };
};

// paginacion
const getRecipes = async (recipe, page = 0, number = 6) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASEURL_API}complexSearch?apiKey=${
      process.env.REACT_APP_APIKEY
    }&query=${recipe}&number=${number}&offset=${
      page * number
    }&addRecipeInformation=true`
  );
  return request;
};

// busca receta por id
const getRecipeById = async (recipeId) => {
  const request = await axios.get(
    `${process.env.REACT_APP_BASEURL_API}${recipeId}/information?apiKey=${process.env.REACT_APP_APIKEY}`
  );
  return request;
};

const methodsApi = { getUser, getRecipes, getRecipeById };
export default methodsApi;
