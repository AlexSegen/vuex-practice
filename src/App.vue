<template>
  <div id="app">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6"><my-todos /></div>

        <div class="col-md-6"><my-posts /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyTodos from "@/components/MyTodos";
import MyPosts from "@/components/MyPosts";

export default {
  name: "App",
  components: {
    MyTodos,
    MyPosts
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {}
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
