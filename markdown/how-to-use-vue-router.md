# 怎么使用VueRouter3

1、首先下载依赖 npm install vue-router@3

2、在src文件夹下新建router文件夹，再新建一个index.js的空文件

```javascript
import VueRouter from "vue-router"
const routes = [
  { path: '/', redirect: 'hello-world'},
  { path: '/hello-world', component: () => import('../views/hello-world') },
]
const router = new VueRouter({ routes })
export default router // 这一行让router在外面引用时，可以import router from "..."，而不是import { router } from "..."
```

3、修改main.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 新增
import router from "./router" // 新增

Vue.use(VueRouter) // 新增
Vue.config.productionTip = false

new Vue({
  router, // 新增
  render: h => h(App),
}).$mount('#app')
```


