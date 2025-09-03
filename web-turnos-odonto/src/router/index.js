import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TurnosAlejandra from '../views/TurnosAlejandra.vue'
import TurnosDaniela from '../views/TurnosDaniela.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/turnos-alejandra',
    name: 'TurnosAlejandra',
    component: TurnosAlejandra
  },
  {
    path: '/turnos-daniela',
    name: 'TurnosDaniela',
    component: TurnosDaniela
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
