<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :id="id" v-html="msg1"></div>
    <div>{{number + 1}}</div>
    <p v-if="seen">现在可以看见我</p>
    <p v-else>你失败了</p>
    <div v-n="8"></div>
    <div :class="[a1,a2]">
        我借你{{money}}，你还我{{a}}，还剩下{{money-a}}
    </div>

    <div :class="{'test-1': a3}">
        style object
    </div>

    <div :class="obj">
        style obj
    </div>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            {{item}}
        </li>
       
    </ul>
    <ul>
        <template v-for="(item,index) in list" >
            <li :key="item">hello</li>
            <li :key="index">{{item}}</li>
        </template>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
//   传参数的组件 是一个对象
  props: {
    msg: String
  },
  //数据驱动模版 data是个方法 返回一个对象 为什么不直接写成对象？多实例共享data的问题
  data(){
      return{
        msg1:'<h1 style="color:red">Hello Vue</h1>',
        id:'txt',
        number:2,
        seen: true,
        money:100,
        a:10,
        a1:'test-1',
        a2:'test-2',
        a3:false,
        obj:{
            'test-1':true
        },
        list:['a','b','c','d']
      }
  },
  computed:{
    b:function(){
        return this.money - this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
