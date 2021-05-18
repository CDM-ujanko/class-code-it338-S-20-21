<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-4">
      <div class="container">
        <b-navbar-brand to="/">Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-nav right>
          <b-nav-item v-if="isLoggedIn" to="/user/0">Profile</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <router-view class="container"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    console.log('App created', this.isLoggedIn);
    if (!this.isLoggedIn) {
      let user = localStorage.getItem('user');
      console.log(user);
      if (user) {
        this.$store.commit('loggedUser/setUser' , JSON.parse(user));
      } else {
        this.$router.push('/login');
      }
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters['loggedUser/isLoggedIn'];
    }
  }
}

</script>

<style lang="scss">
</style>
