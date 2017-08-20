import Vue from 'vue'
import Router from 'vue-router'
import Layut from '@/components/layut'
import Login from '@/components/login'
import Table from '@/components/table'
import Form from '@/components/form'
import List from '@/components/list'


Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layut',
      component: Layut,
      children:[
        {
		      path: '/table',
		      name: 'table',
		      component: Table
		    },
		    {
		      path: '/form',
		      name: 'form',
		      component: Form
		    },
		    {
		      path: '/list',
		      name: 'list',
		      component: List
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
