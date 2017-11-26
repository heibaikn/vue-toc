<template>
  <div id="app">
     <router-link to="/">home</router-link>
     <router-link to="/user/1">user</router-link>
     <router-link to="/user/2/profile">profile</router-link>
     <router-link to="/user/1/posts">posts</router-link>
     <br/>
     <br/>
     <br/>
     <br/>
     <router-link to="/login">login</router-link>
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.view{
  border: 1px solid green
}
</style>
