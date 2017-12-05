<template>
  <div id="app" :class="classes.bg" >
      <select v-model="selected" @change="change">
        <option value="zh">zh</option>
        <option value="en">en</option>
      </select>
     <router-link to="/">home</router-link>
     <router-link to="/user/1">user</router-link>
     <router-link to="/user/2/profile">profile</router-link>
     <router-link to="/user/1/posts">posts</router-link>
     <hr>
     <router-link to="/login">login</router-link>
     <router-link to="/testdoubleclick">testdoubleclick</router-link>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.view {
  min-height: 500px;
  border: 1px solid green;
  padding-top: 20px;
}
</style>
