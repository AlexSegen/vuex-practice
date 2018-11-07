import axios from "axios";

const state = {
  todos: null
};
const getters = {
  TODOS: state => {
    return state.todos;
  }
};
const mutations = {
  SET_TODO: (state, payload) => {
    state.todos = payload;
  },
  ADD_TODO: (state, payload) => {
    state.todos.push(payload);
  }
};
const actions = {
  GET_TODO: async (context, payload) => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    context.commit("SET_TODO", data);
  },
  SAVE_TODO: async (context, payload) => {
    let { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos"
    );
    context.commit("ADD_TODO", payload);
  }
};
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
