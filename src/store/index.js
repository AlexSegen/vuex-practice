import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import posts from "./modules/posts";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todos,
    posts
  }
});
