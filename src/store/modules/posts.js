import postServices from "@/services/post.services";
const state = {
  posts: null
};
const getters = {
  POSTS: state => {
    return state.posts;
  }
};
const mutations = {
  SET_POST: (state, payload) => {
    state.posts = payload;
  },
  ADD_POST: (state, payload) => {
    state.posts.push(payload);
  },
  REMOVE_POST: (state, payload) => {
    state.posts.splice(payload, 1);
  }
};
const actions = {
  GET_POST: async (context, payload) => {
    let { data } = await postServices.getAll();
    context.commit("SET_POST", data);
  },
  SAVE_POST: async (context, payload) => {
    let { data } = await postServices.post(payload);
    context.commit("ADD_POST", data);
  },
  DELETE_POST: async (context, payload) => {
    let { data } = await postServices.delete(payload.id);
    context.commit("REMOVE_POST", payload.index);
  }
};
export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
