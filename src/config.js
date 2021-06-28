import axios from "axios";

const instance = axios.create({
  baseURL: "https://backendquizappbynurbek.herokuapp.com/",
});

export default instance;
