<template>
  <div class="com">
      <slot name="a"></slot>
      childs components {{name}} {{age}}
      <button @click="$emit('patch','你好')">子组件发送到父组件</button>
    <slot name="b"></slot>
  </div>
</template>

<script>
export default {
    //通过props做一个声明
    props: ['age'],
    data(){
        return{
            name :'com'
        }
    },
    methods:{

    }
}
</script>

<style>

</style>