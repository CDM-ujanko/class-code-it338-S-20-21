Vue.component('slider', {
  template: `
  <div class="slider">
    <div class="slides" :style="slidesStyles">
      <div v-for="slide in slides" class="slide" :style="slideStyles">
        <img :src="slide.src" />
      </div>
    </div>
    
    <div class="controls">
      <div class="navigation">
        <button class="prev" @click="goTo(active - 1)"></button>
        <button class="next" @click="goTo(active + 1)"></button>
     </div>
    
      <div class="bullets">
        <button v-for="(s, i) in slides"
         class="bullet"
         :disabled="i === active"
         :class="{active: i === active }"
         @click="goTo(i)"
         
         >  
        </button>
        
      </div>
    </div>
  </div>
  `,
  props: {
    slides: {
      type: Array,
      required: true,
    }
  },
  data: function (){
    return {
      active: 0,
    }
  },

  computed: {
    slidesStyles() {
      return {
        left: -this.active * 100 + '%',
        width: this.slides.length * 100 + '%',
      }
    },
    slideStyles() {
      return {
        flexBasis: 100 / this.slides.length + '%',
      }
    }
  },

  methods: {
    goTo(slide) {
      if (slide < 0) {
        this.active = this.slides.length - 1;
      } else if (slide >= this.slides.length) {
        this.active = 0;
      } else {
        this.active = slide;
      }

      this.$emit('slide-change', this.active);
    }
  }
});


