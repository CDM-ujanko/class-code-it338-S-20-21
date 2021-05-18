<template>
  <div>
    <div v-if="!$store.state.loading" class="row">
      <post v-for="post in $store.state.posts"
          :key="post._id"
          :post="post"
          class="col-4">
      </post>

      <b-pagination
          v-if="$store.state.total > 0"
          v-model="page"
          :total-rows="$store.state.total"
          :per-page="$store.state.pageSize"
          aria-controls="my-table"
          class="my-4"
          align="fill"
      ></b-pagination>
    </div>
    <div v-else class="row">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post';

export default {
  name: 'Home',
  components: {
    Post
  },

  data() {
    return {}
  },

  created() {
    if (!this.$store.getters.hasPosts) {
      this.$store.dispatch('fetchPosts');
    }
  },

  computed: {
    page: {
      get() {
        return this.$store.getters.displayPage;
      },

      set(val) {
        this.$store.commit('setPage', val - 1);
        this.$store.dispatch('fetchPosts');
      }
    }
  },

  methods: {}
}
</script>

<style lang="scss"></style>
