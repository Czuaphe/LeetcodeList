import VueRouter from "vue-router"


const routes = [
  { path: '/', redirect: 'hello-world'},
  { path: '/hello-world', component: () => import('../views/hello-world') },
  { path: '/auto-input', component: () => import('../views/auto-input') },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router




