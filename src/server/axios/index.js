import axios from "axios";

const baseUrl = "http://challenge-react.alkemy.org/";

const getUser = async (user) => {
  //console.log("user", user);
  const request = await axios.post(baseUrl, user);
  return request;
};

// https://dev.to/tutrinh/basic-using-async-and-await-with-axios-ad5 --> const response = await axios.get('url')

const methodsApi = { getUser };
export default methodsApi;
