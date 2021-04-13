Vue.component('slider', {
  template: `
  <div class="container">
     <div v-for="slide in slides" class="slide"></div>
  </div>
`,
  props: {
    message: {
      type: String,
      // required: true,
      default: 'My String!'
    },

    slides: {
      type: Array,
      // required: true,
      default: () => []
    },
  },

  data() {
    return {}
  },

  mounted() {

    // DO NOT! mutate props!
    // setTimeout(() => {
    //   this.message = this.message.toUpperCase();
    // }, 3000)
  },

  computed: {
    uppercaseMessage() {
      return this.message.toUpperCase();
    }
  }
});
