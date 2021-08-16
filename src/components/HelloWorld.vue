<template>
  <div class="hello">
    <div class="scroll">
      <div class="top">
        <div class="top-div" v-for=" { name } in a" :key="name">{{name}}</div>
      </div>
      <!-- <div v-if="visible" class="bottom"></div> -->
    </div>
    <button @click="show">显示</button>
    <button @click="hide">隐藏</button>
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3> -->
    <!-- <el-table>
      <template v-for="(item, index) in object" v-slot:[item.slot.name]="list">
        <div v-if="item.flag" :key="index">
          {{ list }}
        </div>
      </template>
    </el-table> -->
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul> -->
    <!-- <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// const add = require('./util')
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      visible: true, 
      a: [
        {
          // name: 'hello'
        }
      ]
    }
  },
  beforeCreate() {
    // console.log('HelloWorld beforeCreate :>> ')
  },
  created() {
    // console.log('HelloWorld created :>> ')
  },
  beforeMount() {
    // console.log('HelloWorld beforeMount :>> ')
  },
  mounted() {
    // console.log('HelloWorld mounted :>> ')
    // let self = this // {#} -i -sign -t mounted
    // let msg = 'hello world', msg1 = {a: 0} // {#} -i -sign -t mounted
    // // add(11, 22)
    // this.method1(2, 3) // {#} -i -sign -t mounted
    // let number = this.method1(3) // {#} -i -sign -t mounted
    // let number2 = this.method1(2, 5) // {#} -i -sign -t mounted
  },
  computed: {

  },
  methods: {
    show() {
      this.visible = true;
      // this.a[0].name = 'world1' // yes
      this.$set(this.a[0], "name", 'world') // yes
      let self = this // {#} -i -sign -t show
    },
    hide() {
      this.visible = false;
      // this.a[0] = {name: 'world2'} // no
      this.a.splice(0, 1, {name: 'world2'}) // yes
      // this.$set(this.a, 0, {name: 'world2'}) // yes
    },
    method1(param, pow) {  // {#} -i -sign -t method1
      function test() {
        let msg = 'test function'
        return msg
      }

      test()
      return Math.pow(param, pow)
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
/* ========================================== */
.scroll {
  display: fixed;
  width: 300px;
  /* height: 500px; */
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
}
.top {
  width: 100%;
  flex: 1;
  background-color:burlywood;
}
.top-div {
  width: 100%;
  height: 900px;
  background-color: red;
}
.bottom {
  width: 100%;
  height: 100px;
  background-color: bisque;
}
</style>
