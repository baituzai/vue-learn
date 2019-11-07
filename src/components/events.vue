<template>
  <div>
      <button v-on:click="msg">test</button>
  </div>
</template>

<script>
export default {
    methods:{
        msg:function(){
            console.log(Math.random())
        }
    }
}
</script>

<style>

</style>