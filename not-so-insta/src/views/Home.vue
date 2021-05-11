<template>
  <div>
    <div v-if="!loading" class="row">
      <post v-for="post in posts"
          :key="post._id"
          :post="post"
          class="col-4">
      </post>

      <b-pagination
          v-if="total > 0"
          v-model="page"
          :total-rows="total"
          :per-page="pageSize"
          aria-controls="my-table"
      ></b-pagination>
    </div>
    <div v-else class="row">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Post
  },

  data() {
    return {
      loading: false,
      page: 1,
      total: 0,
      pageSize: 0,
      posts: []
    }
  },

  created() {
    this.getPosts();
  },

  watch: {
    page: function () {
      this.getPosts()
    }
  },

  methods: {
    getPosts() {
      this.loading = true;
      axios.get(`http://localhost:8000/posts?page=${this.page - 1}`)
        .then((resp) => {
          console.log(resp);
          this.posts = resp.data.posts;
          this.total = resp.data.total;
          this.pageSize = resp.data.pageSize;
        })
          .catch(console.error)
          .then(() => {
            this.loading = false;
          })

    }
  }
}
</script>

<style lang="scss"></style>
