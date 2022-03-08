import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InputValue from '../views/InputValue.vue'
import TableContent from '../views/TableContent.vue'
import PortfolioView from '../views/PortfolioView.vue'
import 'bootstrap/dist/css/bootstrap.css'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomeView
    },
    {
      path: '/input',
      // name: 'input',
      component: InputValue
    },
    {
    path: '/table',
    name: 'table', 
    component: TableContent
    }
    ,
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    }
  ]
})

export default router
