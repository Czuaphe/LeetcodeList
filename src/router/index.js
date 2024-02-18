import VueRouter from "vue-router"


const routes = [
  { path: '/', redirect: 'hello-world'},
  { path: '/auto-input', component: () => import('../views/auto-input') },
  { path: '/binary-search-tree', component: () => import('../views/binary-search-tree') },
  { path: '/hello-world', component: () => import('../views/hello-world') },
  { path: '/leetcode3', component: () => import('../views/leetcode3') },
  { path: '/leetcode28', component: () => import('../views/leetcode28') },
  { path: '/leetcode76', component: () => import('../views/leetcode76') },
  { path: '/leetcode119', component: () => import('../views/leetcode119') },
  { path: '/leetcode233', component: () => import('../views/leetcode233') },
  { path: '/leetcode1962', component: () => import('../views/leetcode1962') },
  { path: '/leetcode1968', component: () => import('../views/leetcode1968') },
  { path: '/leetcode1984', component: () => import('../views/leetcode1984') },
  { path: '/red-black-tree', component: () => import('../views/red-black-tree') },
  { path: '/smart-repeat', component: () => import('../views/smart-repeat') },
  { path: '/vue-design-doit', component: () => import('../views/vue-design-doit') },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router




