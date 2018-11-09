<template>
  <div class="container ">
    <h3>Posts</h3>
    <div class="row">
      <div class="col-md-8 col-md-offset-2"><my-posts /></div>
    </div>
  </div>
</template>

<script>
import MyPosts from "@/components/MyPosts";

export default {
  name: "App",
  components: {
    MyPosts
  }
};
</script>

<style></style>
