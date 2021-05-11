<template>
  <div class="row">
    <post v-if="post"
        :key="post._id"
        :post="post"
        >
    </post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import axios from "axios";

export default {
  name: 'PostPage',
  props: ['id'],
  components: {
    Post
  },
  data() {
    return {
      post: false
    }
  },

  created() {
    console.log(this.$route);
    console.log(this.id);
    this.getPost();
  },

  methods: {
    getPost() {
      axios.get(`http://localhost:8000/post/${this.$route.params.id}`)
          .then((resp) => {
            console.log(resp);
            this.post = resp.data;
          }).catch(() => {
            console.log('redir!');
            this.$router.push('/home');
      });
    }
  }
}
</script>

<style scoped></style>