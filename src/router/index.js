import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';
const routes = [
  {
    path: '/portal/divisions',
    name: 'Home',
    component: Home
  },
  {
    path: '/portal/divisions/:division',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    props:true
  },
  {
    path: '/portal/profile/:user_code',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/portal/projects/:projectCode',
    name: 'Task',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/portal/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/editProject/:projectCode',
    name: 'UpdateProject',
    component: () => import('../views/UpdateProject.vue')
  },
  {
    path: '/adminProjects',
    name: 'AdminProjects',
    component: () => import('../views/AdminProjects.vue')
  },
  {
    path: '/generate',
    name: 'GenerateToken',
    component: () => import('../views/GenerateToken.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:routes 
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters['auth/isAuthenticated'] && to.name !== 'home') {
    next({ name: 'Login' })
  }
  else next()
})

export default router