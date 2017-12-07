<template lang="pug">
div 
    button( @dblclick='doubleClick' )  doubleClick
    div {{i}}


</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: "",
    data() {
        return {
            i: 0
        }
    },
    methods: {
        doubleClick() {
            this.i++;
            console.log('ok');
            this.userLogin({})
        }
    }
};
</script>
<style lang="scss">

</style>


