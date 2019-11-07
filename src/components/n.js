import Vue from 'vue'
//先创建一个名字
Vue.directive('n',{
    bind:function(el,binding){
        el.textContent = Math.pow(binding.value,2)
    },
    update:function(el,binding){
        el.textContent = Math.pow(binding.value,2)
    }
})