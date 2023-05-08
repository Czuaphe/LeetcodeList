import VueRouter from "vue-router"


const routes = [
  { path: '/', redirect: 'hello-world'},
  { path: '/hello-world', component: () => import('../views/hello-world') },
  { path: '/auto-input', component: () => import('../views/auto-input') },
  { path: '/leetcode1962', component: () => import('../views/leetcode1962') },
  { path: '/binary-search-tree', component: () => import('../views/binary-search-tree') },
  { path: '/red-black-tree', component: () => import('../views/red-black-tree') },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router




