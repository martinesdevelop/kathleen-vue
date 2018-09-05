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
      images: [
        'http://advent.webtm.ru/slider/blooming_rose-wallpaper-1920x1080.jpg',
        'http://advent.webtm.ru/slider/french_alps-wallpaper-1600x900.jpg',
        'http://advent.webtm.ru/slider/single_tree_mist_over_lake-wallpaper-1600x900.jpg',
        'http://advent.webtm.ru/slider/two_trees_hill_landscape-wallpaper-1600x900.jpg',
        'http://advent.webtm.ru/slider/winding_river_aerial_view-wallpaper-1600x900.jpg'
      ],
      slideWidth: window.screen.width + 'px'
    };
  }
};
</script>

<style src="./slider.css"></style>

