<template lang="pug">
.user 12123
    .name ddddd{{$route.params}}
    <router-view></router-view>
</template>

<script>
export default {
  name:'User',
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
.user{
    height: 100px;
    background-color: #f00;
}
</style>



