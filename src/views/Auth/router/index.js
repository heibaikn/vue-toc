const Auth = () => import('@/views/Auth/login')

export default [
  {
    path: '/login',
    name: 'login',
    component: Auth
  },

]