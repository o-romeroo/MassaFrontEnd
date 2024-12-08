import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../views/Home.vue'
import Teste from '../views/Teste.vue'
import Algorithm from '../views/Algorithm.vue'
import About from '../views/About.vue'
import Support from '../views/Support.vue'
import Execution from '../views/Execution.vue'
import UserData from '../views/UserData.vue'
import SusEvaluation from '@/views/SusEvaluation.vue'


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'execution',
        component: Execution
      },
      {
        path: 'algorithm',
        component: Algorithm
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'support',
        component: Support
      },
      {
        path: 'data',
        component: UserData
      },
      {
        path: 'sus',
        component: SusEvaluation
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router;
