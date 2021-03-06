import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InputValue from '../views/InputValue.vue'
import TableContent from '../views/TableContent.vue'
import tableId from '../views/Result.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/Jobs/NotFound.vue'



import 'bootstrap/dist/css/bootstrap.css'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/input',
      name: 'input',
      component: InputValue
    },
    {
      path: '/table',
      name: 'table', 
      component: TableContent
    }
    ,
    {
      path: '/table/:id',
      name: 'result',
      component: tableId,
      props: true,
    }
    ,
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    }
    ,
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetails,
      props: true
    },
    {
      path: '/input/:id',
      // name: 'input',
      component: InputValue,
      props: true
    }
    ,
    // redirect
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    // catch all
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
