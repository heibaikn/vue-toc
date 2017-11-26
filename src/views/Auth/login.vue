<template lang="pug">
.login 
    div 用户名account:{{this.userName}}
        <br/>
        input(type="text" placeholder="请输入用户名" v-model="userName")

    button(@click="login") 登录
</template>
<script>
import {mapActions} from 'vuex';
export default {
  name: "",
  data(){
      return {
          userName:''
      }
  },
  methods: {
      ...mapActions('Auth',['userLogin']),
    login() {
        // console.log();
        this.userLogin({
            account:this.userName
        })
        console.log('login');
    }
  }
};
</script>
<style lang="scss">

</style>


