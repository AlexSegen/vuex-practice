<template>
  <div id="app">
  <div class="container">
  <div class="row">
      <div class="col-md-6">
        <h1>Todos</h1>
        <input type="text" @keydown.enter="addTodo()" v-model="todo.title" placeholder="Todo title"> <button type="button" @click="addTodo()">Add</button>
        <ul class="list-group mt-3">
          <li v-for="(item, index) in TODOS" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
            {{ item.title }}
            <button class="btn badge badge-danger badge-pill" @click="deleteTodo(item.id, index)">X</button>
          </li>
        </ul>
      </div>

      <div class="col-md-6">
        <h1>Posts</h1>
        <input type="text" v-model="post.title" placeholder="Post title">
        <button type="button" @click="addPost()">Add</button><br>
        <textarea cols="30" rows="2" v-model="post.body" placeholder="Post body"></textarea>
        <ul class="list-unstyled">
          <li class="mb-3" v-for="(item, index) in POSTS" :key="item.id">
            <div class="card">
              <div class="card-header">
                {{ item.title }}
              </div>
              <div class="card-body">
                {{ item.body }}
              </div>
              <div class="card-footer">
              <button @click="deletePost(item.id, index)">X</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

  </div>
  
  
  </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {
      todo: {
        title: "",
        completed: false
      },
      post: {
        title: "",
        body: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("GET_TODO");
    this.$store.dispatch("GET_POST");
  },
  computed: {
    ...mapGetters(["TODOS", "POSTS"])
    /*todoList() {
      return this.$store.getters.TODOS;
    }*/
  },
  methods: {
    addTodo() {
      this.$store.dispatch("SAVE_TODO", this.todo);
      this.todo = {
        title: "",
        completed: false
      };
    },
    deleteTodo(id, index) {
      let payload = {
        id: id,
        index: index
      };
      this.$store.dispatch("DELETE_TODO", payload);
    },
    addPost() {
      this.$store.dispatch("SAVE_POST", this.post);
      this.post = {
        title: "",
        body: ""
      };
    },
    deletePost(id, index) {
      let payload = {
        id: id,
        index: index
      };
      this.$store.dispatch("DELETE_POST", payload);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
