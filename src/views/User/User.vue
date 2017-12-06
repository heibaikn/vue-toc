<template lang="pug">
.user user
    <hr/>
    <router-link to="/">home</router-link>
    <router-link to="/user/1">user</router-link>
    <router-link to="/user/2/profile">profile</router-link>
    <router-link to="/user/1/posts">posts</router-link>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'User',
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.user {
  height: 100px;
  background-color: #f00;
}
</style>



