
let vueInstance = new Vue({
  el: '#vue-app',
  data: {
    item: '',
    items: [
        'Buy Milk!'
    ],
    done: [],
  },
  methods: {
    addItem() {
      console.log('Hello, I am going to add things now!');
      if (this.item.length === 0) {
        return;
      }

      this.items.push(this.item);
      this.item = '';
    },

    removeItem(index) {
      this.items.splice(index, 1)
    },

    markDone(index) {
      this.done = this.done.concat(this.items.splice(index, 1));
    }
  }
});
