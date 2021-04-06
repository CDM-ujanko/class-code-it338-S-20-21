
let vueInstance = new Vue({
  el: '#vue-app',
  data: {
    message: 'Hello students!',
  },

  beforeCreate() {
    console.log('Before Create!', this);
  },

  created() {
    console.log('Created!', this);
  },

  beforeMount() {
    console.log('Before Mount!', this)
  },

  mounted() {
    console.log('Mounted!', this)
  },

  beforeUpdate() {
    console.log('Before Update!', this)
  },

  updated() {
    console.log('Updated!', this)
  },

  beforeDestroy() {
    console.log('Before Destroy!', this)
  },

  destroyed() {
    console.log('Destroyed!', this)
  },
});

setTimeout(function () {
  vueInstance.$destroy();
}, 3000)