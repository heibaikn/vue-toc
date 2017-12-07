<template lang="pug">
.task inject111
    provide-inject
</template>
<script>
import ProvideInject from './components/provide-inject';

export default {
  name: '',
  data(){
    return {
      bar: 1
    }
  },
  provide() {
    return {
      foo: this.aa,
    }
  },
  methods:{
    aa(){
      console.log(123);
    }
  },
  components: {
    [ProvideInject.name]: ProvideInject
  },
  watch:{
    foo:function(value){
      // console.log(value);
      this.aa();
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  border: 1px solid #000;
}
</style>


