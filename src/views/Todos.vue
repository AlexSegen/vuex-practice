<template>
  <div class="container ">
    <h3>Todos</h3>
    <div class="row">
      <div class="col-md-8 col-md-offset-2"><my-todos /></div>
    </div>
  </div>
</template>

<script>
import MyTodos from "@/components/MyTodos";
export default {
  name: "App",
  components: {
    MyTodos
  }
};
</script>

<style></style>
