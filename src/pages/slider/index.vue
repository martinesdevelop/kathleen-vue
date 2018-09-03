<template>
  <div class="slider-page">
    <div class="slider">
      <div class="wrapper">
        <div 
          v-for="n in 10" 
          :key="n" 
          class="slide"
          :style="{ width: slideWidth }">
          Slide #{{ n }}
        </div>
      </div>
    </div>
    <div class="pagination">
      <div 
        v-for="n in 10" 
        :key="n" 
        class="pagination-bullet">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      slideWidth: screen.width + 'px'
    };
  }
};
</script>

<style src="./slider.css"></style>

