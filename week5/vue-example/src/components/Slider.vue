<template>
  <div class="slider">
    <div class="slides" :style="slidesStyles">
      <div v-for="(slide, i) in slides" :key="i" class="slide" :style="slideStyles">
        <img src="../assets/01.jpg" alt="image">
      </div>
    </div>

    <div class="controls">
      <div class="navigation">
        <button class="prev" @click="goTo(active - 1)"></button>
        <button class="next" @click="goTo(active + 1)"></button>
      </div>

      <div class="bullets">
        <button v-for="(s, i) in slides"
            :key="i"
            class="bullet"
            :disabled="i === active"
            :class="{active: i === active }"
            @click="goTo(i)"

        >
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
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
}
</script>

<style scoped lang="scss">

.slider {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border: 1px solid teal;

  .controls {
    button {


    }
  }
}

.slider .controls button {
  background: none;
  border: none;
}

.slider .slides {
  position: absolute;
  display: flex;
  flex-direction: row;
  /*width: 300%;*/
  transition: left ease-in-out 500ms;
}

.slider .slides .slide {
  position: relative;
  height: 100%;
  flex: 0 0 33.33%;
}

.slider .slides img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider .controls {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.slider .controls .bullets,
.slider .controls .navigation {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.slider .controls .bullets {
  height: 10%;
  top: 40%;
  justify-content: center;
}

.slider .controls .bullets .bullet {
  min-width: 20px;
  max-width: 20%;
  margin: 0 1rem;
  height: 0.3rem;
  flex: 1 1 auto;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.65);
}

.slider .controls .bullets .bullet.active,
.slider .controls .bullets .bullet:hover {
  background-color: rgba(255, 255, 255, 0.95);
}

.slider .controls .navigation {
  height: 50%;
  top: 25%;
  justify-content: space-between;
  padding: 0 4%;
}

.slider .controls .navigation button {
  width: 4rem;
  height: 4rem;
  transform: rotate(45deg);
  border: 3px solid rgba(255, 255, 255, 0.65);
}

.slider .controls .navigation button:hover {
  border: 3px solid rgba(255, 255, 255, 0.95);
}

.slider .controls .navigation button.prev {
  border-top: 0;
  border-right: 0;
}

.slider .controls .navigation button.next {
  border-bottom: 0;
  border-left: 0;
}

</style>