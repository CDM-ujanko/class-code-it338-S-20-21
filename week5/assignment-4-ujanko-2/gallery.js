Vue.component('gallery', {
  template: `
  <div class="gallery">
    <div v-for="(img, i) in images" :key="i" class="item" :class="img.class">
      <img :src="img.src" />
      <button @click="deleteImage(i)" class="remove"></button>
    </div>
  </div>
  `,
  props: {
    images: {
      type: Array,
      required: true
    }
  },

  methods: {
    deleteImage(i) {
      this.$emit('remove', i);
    }
  }
})


