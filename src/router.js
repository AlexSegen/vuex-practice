import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Page from "./views/Page";
import Todos from "./views/Todos";
import Posts from "./views/Posts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/page",
      name: "Page",
      component: Page
    },
    {
      path: "/todos",
      name: "Todos",
      component: Todos
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    }
  ]
});
