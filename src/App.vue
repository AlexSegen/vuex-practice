<template>
  <div id="app">
    <h1>Todos</h1>
    <input type="text" @keydown.enter="addTodo()" v-model="todo.title" placeholder="Todo title"> <button type="button" @click="addTodo()">Add</button>
    <ul>
      <li v-for="item in todoList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      todo: {
        title: "",
        completed: false
      }
    };
  },
  mounted() {
    this.$store.dispatch("GET_TODO");
  },
  computed: {
    todoList() {
      return this.$store.getters.TODOS;
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch("SAVE_TODO", this.todo);
      this.todo = {
        title: "",
        completed: false
      };
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
  max-width: 400px;
  margin: 30px auto;
}
</style>
