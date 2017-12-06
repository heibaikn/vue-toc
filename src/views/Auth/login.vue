<template lang="pug">
.login 
    div 用户名account:
        input(type="text" placeholder="请输入用户名" v-model="userName") 
        span {{this.userName}}
    div 用户名password:
         input(type="text" placeholder="请输入密码" v-model="password") 
         span {{this.password}}
    button(@click="login") 登录
    <hr/>
    div directive:
        canvas.canvas(v-frontEndVerify="verify"  width="90" height="40" )          
    <hr/>        
    div fliter:文件大小
        input(type="number" placeholder="请输入大小" v-model="size") 
        span {{size|fileSize}}
      
       


</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: "",
    data() {
        return {
            verify:"",
            size:1024*1024,
            userName: '',
            password: '',
            rememberPassword: false,
        }
    },
    methods: {
        ...mapActions('Auth', ['userLogin']),
        login() {
            // console.log();
            this.userLogin({
                userName: this.userName,
                password: this.password,
                rememberPassword: false,
            })
            console.log('login');
        }
    }
};
</script>
<style lang="scss">
.login {
  border: 1px solid #000;
}
</style>


