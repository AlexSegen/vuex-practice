<template>
  <div id="app">
    <nav>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
      <li><router-link to="/posts">Posts</router-link></li>
      <li><router-link to="/page">Page</router-link></li>
    </nav>
    <div class="viewWrap"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
nav li {
  display: inline-block;
  margin: 0 5px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.viewWrap {
  padding-top: 20px;
}
ul {
  list-style-type: none;
}
</style>
