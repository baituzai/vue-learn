<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Ev/>
    <Com :age="ages" @patch="msg">
        <h1 slot="a">插槽动态加东西A</h1>
        <h1 slot="b">插槽动态加东西B</h1>
        
    </Com>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import Ev from './components/events.vue'
import Com from './components/com.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Ev,
    Com
  },
  data(){
      return{
          ages:23
      }
  },
  methods:{
      msg: function(ag){
          this.ages++
          console.log(ag)
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
