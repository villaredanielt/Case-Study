import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from '@/components/AddTask.vue'
import DeleteTask from '@/components/DeleteTask.vue'
import UpdateTask from '@/components/UpdateTask.vue'

//route paths
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Delete',
    name: 'Delete',
    component: DeleteTask
  },

  {
    path: '/Update',
    name: 'Update',
    component: UpdateTask
  },

  {
    path: '/AddTask',
    name: 'AddTask',
    component: AddTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
