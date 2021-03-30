
let vueInstance = new Vue({
  el: '#vue-app',
  data: {
    query: '',
    cocktails: [],
  },
  methods: {
    getCocktails() {
      axios({
        method: 'GET',
        url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`,
      })
      .then((resp) => {
        this.cocktails = resp.data.drinks;
      })
      .catch(console.error)
    }
  }
});
