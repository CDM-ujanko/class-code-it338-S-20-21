new Vue({
  el: '#vue-app',
  data: {
    message: 'Slider example!',
    slides: [
      {
        src: './img/01.jpg'
      }, {
        src: './img/02.jpg'
      }, {
        src: './img/03.jpg'
      }, {
        src: './img/01.jpg'
      },
    ]
  },
  methods: {
    slideChange(i) {
      console.log('This slide has change to!', i);
    }
  }
});


