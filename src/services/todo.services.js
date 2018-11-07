import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
//axios.defaults.baseURL = "http://localhost:3001";

const RESOURCE_NAME = "/todos";

export default {
  getAll() {
    return axios.get(RESOURCE_NAME);
  },
  post(data) {
    return axios.post(RESOURCE_NAME, data);
  },
  delete(id) {
    return axios.delete(RESOURCE_NAME + "/" + id);
  },
  put(id, data) {
    return axios.put(RESOURCE_NAME + "/" + id, data);
  }
};
