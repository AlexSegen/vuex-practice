<template>
  <div class="card">
    <div class="card-body">
      <h3>Todos</h3>
      <input
        type="text"
        @keydown.enter="addTodo();"
        v-model="todo.title"
        placeholder="Todo title"
      />
      <button type="button" @click="addTodo();">Add</button>
      <ul class="list-group mt-3">
        <li v-if="TODOS && TODOS.length == 0">
          There are not todos. You can add a new one!
        </li>
        <li
          v-else
          v-for="(item, index) in TODOS"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ item.title }}
          <button
            class="btn badge badge-danger badge-pill"
            @click="deleteTodo(item);"
          >
            X
          </button>
        </li>
      </ul>
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
      }
    };
  },
  mounted() {
    this.$store.dispatch("GET_TODO");
  },
  computed: {
    ...mapGetters(["TODOS"])
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
    deleteTodo(payload) {
      this.$store.dispatch("DELETE_TODO", payload);
    }
  }
};
</script>

<style></style>
