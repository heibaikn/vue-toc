<template lang="pug">
.user 12123
    .name ddddd{{$route.params}}
    <router-view></router-view>
</template>

<script>
console.log(4);
export default {
  name:'User',
  mounted(){
      console.log(12);
  }
}
</script>

<style lang="scss" scoped>
.user{
    height: 100px;
    background-color: #f00;
}
</style>



