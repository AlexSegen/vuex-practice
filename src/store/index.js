import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: null
  },
  getters: {
    TODOS: state => {
      return state.todos;
    }
  },
  mutations: {
    SET_TODO: (state, payload) => {
      state.todos = payload;
    },
    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    }
  },
  actions: {
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
  }
});
