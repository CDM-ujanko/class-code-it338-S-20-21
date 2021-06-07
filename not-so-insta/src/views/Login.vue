<template>
  <div class=" col-md-4">
    <b-form @submit.prevent.stop="login">
      <b-form-group
          id="username-group"
          label="Username:"
          label-for="username"
      >
        <b-form-input
            id="username"
            v-model="username"
            type="text"
            placeholder="Username"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password-group" label="Password:" label-for="password">
        <b-form-input
            id="password"
            v-model="password"
            type="password"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="my-4" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login() {
      axios.post(`http://classexample.com:8000/login`, {
        username: this.username,
        password: this.password,
      })
          .then((resp) => {
            console.log(resp);
            // this.post = resp.data;
            this.$store.commit('loggedUser/setUser', resp.data);
            this.$router.push('/');
          }).catch((err) => {
            console.log(err);
      });
    }
  }
}
</script>

<style scoped></style>