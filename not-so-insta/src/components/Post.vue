<template>
  <div>
    <div class="card">
      <img class="card-img-top" :src="post.media[0].src" :alt=post.media[0].title>
      <div class="card-body">
        <router-link :to="'/post/' + post.index" class="card-title">{{ post.name }}</router-link>
        <p class="card-text">{{ post.date  }}</p>
        <p class="card-text">{{ post.date | date }}</p>
        <p class="card-text">{{ post.text }}</p>
        <ul class="card-text">
          <li v-for="(tag, i) in post.tags" :key="i">{{ tag }}</li>
        </ul>
        <a href="#" class="btn btn-primary like" @click.prevent="like">Like {{ likes }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: Object
    },

    data() {
      return {
        likes: 0,
      }
    },

    filters: {
      date(dateString) {
        let date = new Date(dateString);
        return date.toLocaleDateString();
      }
    },

    methods: {
      like() {
        this.likes++;
      }
    }
  }

</script>

<style lang="scss" scoped>
  //body {
  //  background: red !important;
  //}

  .card {
    .card-img-top {
      height: 400px;
      object-fit: cover;
    }

    ul.card-text {
      list-style: none;
      margin: 1rem 0;
      padding: 0;

      li {
        display: inline-block;
        padding: 0.05rem 0.3rem;
        margin: 0.1rem;
        border: 1px solid #2c3e50;
        border-radius: 3px;
      }
    }
  }
</style>