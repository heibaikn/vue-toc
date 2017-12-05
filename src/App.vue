<template lang="pug">
  <div id="app" >
    app-header
    .main
      app-slider
      <router-view class="view"/>
  </div>
</template>

<script>
import createStyle from './assets/style';
console.log(createStyle('zh'));
export default {
  name: 'app',
  data() {
    return {
      selected: 'zh',
      classes: createStyle('zh')
    }
  },
  methods: {
    change() {
      this.classes = createStyle(this.selected)
    }
  },
}
</script>

<style>
#app {
}
.main {
  display: flex;
  
}
</style>
