<template lang="pug">
.login 
    div 用户名account:
        input(type="text" placeholder="请输入用户名" v-model="userName") 
        span {{this.userName}}
    div 用户名password:
         input(type="text" placeholder="请输入密码" v-model="password") 
         span {{this.password}}
    button(@click="login") 登录
       

</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      verify: "",
      size: 1024 * 1024,
      userName: "",
      password: "",
      rememberPassword: false
    };
  },
  methods: {
    ...mapActions("Test", ["queue"]),
    async login() {
      // console.log();
      for (var i=0;i<5;i++) {
        let ret = await this.queue({
          userName: "xiexianguo",
          password: "12345678",
          rememberPassword: false,
        });
        console.log(ret);
      }
      // console.log('login');
    }
  }
};
</script>
<style lang="scss">
.login {
  border: 1px solid #000;
}
</style>


