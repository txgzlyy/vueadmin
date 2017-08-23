import Vue from 'vue'
import Router from 'vue-router'
import Layut from '@/components/layut'
import Login from '@/components/login'
import Table from '@/components/table'
import Form from '@/components/form'
import List from '@/components/list'
import Reset from '@/components/reset'
import User from '@/components/user'


Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Layut',
      component: Layut,
      children:[
        {
		      path: '/admin/table',
		      name: 'table',
		      component: Table
		    },
		    {
		      path: '/admin/form',
		      name: 'form',
		      component: Form
		    },
		    {
		      path: '/admin/list',
		      name: 'list',
		      component: List
        },
        {
          path: '/admin/user',
          name: 'user',
          component: User
        },
        {
          path: '/admin/reset',
          name: 'reset',
          component: Reset
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
