<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    Hello from IT 338!
    <slider :slides="slides"></slider>
    <hello-world msg="Welcome to Your Vue.js App"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Slider from "@/components/Slider";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Slider
  },
  data() {
    return {
      slides: [
        //  TODO: fix images.
        {
          src: '@/assets/01.jpg'
        }, {
          src: '~/assets/02.jpg'
        }, {
          src: '../assets/03.jpg'
        }
      ]
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
