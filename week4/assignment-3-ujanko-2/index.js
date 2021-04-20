Vue.component('todo-list', {
  template: `
    <div class="list">
      <h3>{{ title }}</h3>
      <form v-on:submit.prevent class="my-4">
        <div class="form-row">
          <label for="list-title">List name:</label>
        </div>
        <div class="form-row">
          <input id="list-title" class="col form-control" type="text" v-model="item">
          <button @click="addItem" type="submit" class="col-2 btn btn-primary ml-2">Add</button>
        </div>
      </form>
      <ul v-if="items.length > 0">
        <li v-for="(item, i) in sorted" :key="i" class="my-3">
          {{ item }}
          <button class="btn btn-danger float-right" @click="removeItem(i)">Delete</button>
        </li>
      </ul>
      <p v-else>You have no items in this list.</p>
<!--      <button @click="sort = !sort" type="submit" class="col-2 btn btn-primary ml-2">Sort</button>-->
      <button @click="onSort" type="submit" class="col-2 btn btn-primary ml-2">Sort</button>
      <button @click="removeList" type="submit" class="btn btn-danger my-4 float-right">Delete List</button>
    </div>
  `,

  props: {
    title: {
      type: String,
      default: 'My List'
    }
  },

  data: function () {
    return {
      item: '',
      items: ['One'],
      sort: false
    }
  },

  computed: {
    sorted() {
      if (this.sort) {
        // TODO
        return this.items.slice().sort((a, b) => {
          return a.localeCompare(b);
        });
      }

      return this.items;
    }
  },

  methods: {
    /**
     * Adds a new item to the list.
     */
    addItem: function () {
      // TODO:
      if (!this.item.length) {
        return;
      }

      this.items.push(this.item);
      this.item = '';
    },


    /**
     * Removes the item from a list.
     */
    removeItem: function (i) {
      // TODO:
      this.items.splice(i, 1);
    },

    onSort() {
      this.sort = !this.sort;
    },

    removeList() {
      this.$emit('delete', this.title);
    }
  }
});


var app = new Vue({
  el: '#app',
  data: {
    title: 'Basic Component',
    list: '',
    lists: ['TODOs']
  },

  methods: {
    /**
     * Adds a new list to the list array.
     */
    createList: function() {
      this.lists.push(this.list);
      this.list = '';
    },

    /**
     * Removes the list from a given index
     * @param title
     */
    removeList: function(title) {
      let index = this.lists.indexOf(title);
      console.log(title, index);
      if (index !== -1) {
        this.lists.splice(index, 1);
      }
    }
  }
});