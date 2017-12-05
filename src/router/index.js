import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/views/Auth/router';
import User from '@/views/User/router';
import Task from '@/views/User/router';



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'default',
      component: () => import('@/views/Task/task'),
    },
    ...Task,
    ...Auth,
    ...User,

  ]
})
