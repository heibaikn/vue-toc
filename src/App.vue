<template lang="pug">
  <div id="app" >
    app-header.header
    .main
      app-slider.slider
      <router-view class="view"/>
  </div>
</template>

<script>
import createStyle from "./assets/style";
export default {
  name: "app",
  data() {
    return {
      selected: "zh",
      classes: createStyle("zh")
    };
  },
  methods: {
    change() {
      var a;
      this.classes = createStyle(this.selected);
    }
  }
};
</script>

<style lang="scss">
@import "./assets/reset.css";

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 2px;
  .header {
    height: 50px;
  }
  .main {
    flex: 1;
    display: flex;

    // min-width: 1300px;
    // min-height: 900px;
    .slider {
      width: 150px;
    }
    .view {
      flex: 1;
    }
  }
}
</style>
