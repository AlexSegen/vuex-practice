import userServices from "@/services/user.services";
const state = {
  users: null
};
const getters = {
  USERS: state => {
    return state.users;
  }
};
const mutations = {
  SET_USER: (state, payload) => {
    state.users = payload;
  },
  ADD_USER: (state, payload) => {
    state.users.push(payload);
  },
  REMOVE_USER: (state, payload) => {
    state.users.splice(payload, 1);
  }
};
const actions = {
  GET_USER: async (context, payload) => {
    let { data } = await userServices.getAll();
    context.commit("SET_USER", data);
  },
  SAVE_USER: async (context, payload) => {
    let { data } = await userServices.post(payload);
    context.commit("ADD_USER", data);
  },
  DELETE_USER: async (context, payload) => {
    let { data } = await userServices.delete(payload.id);
    context.commit(
      "REMOVE_USER",
      state.users.findIndex(find => find.id == payload.id)
    );
  }
};
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
