<template lang="pug">
.login 
    div(@click="a++") +
    div(@click="a=null") null
    div {{b}}
       

</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "",
    data() {
        return {
            a: 1,
            img: '../../assets/logo.png',
            verify: "",
            size: 1024 * 1024,
            userName: "",
            password: "",
            rememberPassword: false
        };
    },
    computed: {
        b: {
            get() {
                console.log(this.a);
                return 'a:'
            }
        }
    },
    methods: {
        ...mapActions("Test", ["queue"]),
    }
};
</script>
<style lang="scss">
.login {
  border: 1px solid #000;
}
</style>


