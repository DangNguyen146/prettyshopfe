import { createRouter, createWebHistory } from 'vue-router'

//admin
import AddCategory from '../views/Admin/Category/AddCategory.vue'
import CategoryAdmin from '../views/Admin/Category/Category.vue'
import EditCategory from '../views/Admin/Category/EditCategory.vue'
import ShowDetails from '../views/user/Product/ShowDetails.vue'
import EditProduct from '../views/Admin/Product/EditProduct.vue'

import SignupUpForm from "../views/user/SignupUpForm.vue";
import SigninUpForm from "../views/user/SigninUpForm.vue";

import HomeView from '../views/HomeView.vue'
import Category from "../views/user/Category/Category.vue"
import Product from "../views/user/Product/Product.vue"
import ListProducts from "../views/user/Product/ListProducts.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'HomePage'
    }
  },
  //Product routes
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path : '/category/show/:id',
    name : 'ListProducts',
    component: ListProducts
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
    path: '/signup',
    name: 'SignupUpForm',
    component: SignupUpForm,
    meta: {
      title: 'Signup'
    },
  },
  {
    path: '/signin',
    name: 'SigninUpForm',
    component: SigninUpForm,
    meta: {
      title: 'SigninUpForm'
    },
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory,
    meta: {
      title: 'Introduce'
    },
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory,
    meta: {
      title: 'Introduce'
    },
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: CategoryAdmin,
    meta: {
      title: 'Manager category'
    },
  },
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
    meta: {
      title: 'Product :id'
    },
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
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
