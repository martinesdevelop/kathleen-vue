<template>
  <div :class="$style.app">
    <div :class="$style.container">
      <div :class="$style.circle">
        <div :class="$style.pulse"></div>
        <div :class="$style.orbit">
          <div :class="$style.rotator">
            <div :class="$style.satelite"></div>
          </div>
        </div>
        <div :class="$style.inner">
          <div :class="$style.text"></div>
        </div>
      </div>
      <div :class="$style.actions">
        <div :class="$style.button">Button</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module src="./thecircle.css"></style>
