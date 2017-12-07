<template lang="pug">
  .task(@click="add") inject
</template>
<script>
export default {
  name: 'provide-inject',
  inject:{
    foo: { default: 'foo' }
  },

  methods:{
    add(){
      console.log('add');
      // this.foo.a()
      this.foo()
      
    }
  },
  mounted(){
    console.log(this.foo);
  }
}
</script>

<style lang="scss" scoped>
.task {
  border: 1px solid #000;
}
</style>


