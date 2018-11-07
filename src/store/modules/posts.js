import axios from "axios";

const state = {
  posts: null
};
const getters = {
  POSTS: state => {
    return state.posts;
  }
};
const mutations = {};
const actions = {
  GET_POSTS({ commit }) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        this.state.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
