import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'HomePage'
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/admin/category/add',
    name: 'AddCaegory',
    component: AddCategory,
    meta: {
      title: 'Introduce'
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title + ' - Prettyshop' : 'Prettyshop'
  next()
})

export default router
