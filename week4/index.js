let vueInstance = new Vue({
  el: '#vue-app',
  data: {
    message: 'Welcome to events!',
  },
  methods: {
    myMethod(e, param) {
      // e.stopPropagation();
      // e.preventDefault();
      console.log('My method!', e.target, param);
    }
  }
});


let btn = document.getElementById('my-btn');
btn.addEventListener('click', (e) => {
  console.log('Btn click!', e);
})

console.log(btn);

