import todoServices from "@/services/todo.services";
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
  },
  REMOVE_TODO: (state, payload) => {
    state.todos.splice(payload, 1);
  }
};
const actions = {
  GET_TODO: async (context, payload) => {
    let { data } = await todoServices.getAll();
    context.commit("SET_TODO", data);
  },
  SAVE_TODO: async (context, payload) => {
    let { data } = await todoServices.post(payload);
    context.commit("ADD_TODO", payload);
  },
  DELETE_TODO: async (context, payload) => {
    let { data } = await todoServices.delete(payload.id);
    context.commit("REMOVE_TODO", payload.index);
  }
};
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
