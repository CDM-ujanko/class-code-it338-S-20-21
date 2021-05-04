<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="row">
      <post v-for="post in posts"
          :key="post._id"
          :post="post"
          class="col-4">
      </post>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Post
  },

  data() {
    return {
      posts: []
    }
  },

  created() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios.get('http://localhost:8000/posts')
        .then((resp) => {
          console.log(resp);
          this.posts = resp.data;
        }).catch(console.error);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
