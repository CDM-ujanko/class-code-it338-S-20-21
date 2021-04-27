let vueInstance = new Vue({
  el: '#vue-app',
  data: {
    images: [
      {
        src: './img/img-1.jpg'
      }, {
        src: './img/img-2.jpg'
      }, {
        src: './img/img-3.jpg',
        class: 'large'
      }, {
        src: './img/img-4.jpg',
        class: 'large'
      }, {
        src: './img/img-5.jpg'
      }, {
        src: './img/img-6.jpg'
      }, {
        src: './img/img-7.jpg',
        class: 'wide'
      }, {
        src: './img/img-8.jpg'
      }, {
        src: './img/img-9.jpg'
      }, {
        src: './img/img-10.jpg'
      }, {
        src: './img/img-12.jpg'
      }, {
        src: './img/img-13.jpg',
        class: 'wide'
      },
    ]
  },

  methods: {
    onRemove(i) {
      this.images.splice(i, 1);
    }
  }
});


