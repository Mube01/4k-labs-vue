import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Home
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
