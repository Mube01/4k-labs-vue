import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: ()=> import('../views/Projects.vue')
  },
  {
    path: '/projects/:projectCode',
    name: 'Task',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/404',
    name:'404',
    component:() => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters['auth/isAuthenticated'] && to.name !== 'home') {
    next({ name: 'Login' })
  }
  else next()
})

export default router
