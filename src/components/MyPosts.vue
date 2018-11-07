<template>
  <div>
    <h3>Posts</h3>
    <input type="text" v-model="post.title" placeholder="Post title" />
    <button type="button" @click="addPost();">Add</button><br />
    <textarea
      cols="30"
      rows="2"
      v-model="post.body"
      placeholder="Post body"
    ></textarea>
    <ul class="list-unstyled">
      <li class="mb-3" v-for="(item, index) in POSTS" :key="item.id">
        <div class="card">
          <div class="card-header">{{ item.title }}</div>
          <div class="card-body">{{ item.body }}</div>
          <div class="card-footer">
            <button
              class="btn badge badge-danger badge-pill"
              @click="deletePost(item.id, index);"
            >
              X
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("GET_POST");
  },
  computed: {
    ...mapGetters(["POSTS"])
  },
  methods: {
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

<style></style>
