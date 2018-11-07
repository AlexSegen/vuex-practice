import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const RESOURCE_NAME = "/posts";

export default {
  getAll() {
    return axios.get(RESOURCE_NAME);
  },
  post(data) {
    return axios.post(RESOURCE_NAME, data);
  },
  delete(id) {
    return axios.delete(RESOURCE_NAME + "/" + id);
  }
};
