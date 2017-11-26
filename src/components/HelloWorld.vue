<template>
  <div class="hello">
    <router-link to="user/1">user</router-link>
  </div>
</template>

<script>
console.log(3);
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1,h2 
  font-weight: normal
  background: #f00



</style>
