import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const loggedUser = {
  namespaced: true,
  state: () => ({
    user: {},
  }),
  mutations: {
    /**
     * Set the user object.
     * @param {Object} state The state.
     * @param {Object} user The user object.
     */
    setUser(state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user;
    }
  },

  getters: {
      isLoggedIn: state => {
        return Object.keys(state.user).length > 0;
      }
  }
}

const store = new Vuex.Store({
  state: {
    loading: false,
    posts: [],
    page: 0,
    total: 0,
    pageSize: 0,
  },

  mutations: {
    /**
     * Set the posts to the given posts.
     * @param {Object} state The state.
     * @param {Array} posts The array of posts.
     */
    setPosts(state, posts) {
      state.posts = posts;
    },

    /**
     * Set the page
     * @param {Object} state The state.
     * @param {Number} page The page number.
     */
    setPage(state, page) {
      state.page = page;
    },

    /**
     * Set the total numner of items.
     * @param {Object} state The state.
     * @param {Number} total The total number.
     */
    setTotal(state, total) {
      state.total = total;
    },

    /**
     * Set the pageSize
     * @param {Object} state The state.
     * @param {Number} pageSize The pageSize.
     */
    setPageSize(state, pageSize) {
      state.pageSize = pageSize;
    },
  },

  getters: {
    /**
     * Checks if the posts are empty.
     * @param {Object} state The state.
     * @return {boolean}
     */
    hasPosts: state => {
      return state.posts.length > 0;
    },

    /**
     * Page number staring at 1
     * @param {Object} state The state.
     * @return {Number} The display page number,
     */
    displayPage: state => {
      return state.page + 1;
    }
  },

  actions: {
    fetchPosts(context) {
      this.loading = true;
      axios.get(`http://classexample.com:8000/posts?page=${context.state.page}`)
          .then((resp) => {
            console.log(resp);
            context.commit('setPageSize', resp.data.pageSize)
            context.commit('setTotal', resp.data.total)
            context.commit('setPosts', resp.data.posts)
          })
          .catch(console.error)
          .then(() => {
            this.loading = false;
          })
    }
  },

  modules: {
    loggedUser: loggedUser
  }
});

export default store;