import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import Guard from '../middlewares/middleware'
import ContactView from '../views/ContactView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      children: [{ path: '', name: 'home', component: HomeView }]
    },
    {
      path: '/login', //colocar Authcomponent aqui
      beforeEnter: Guard.redirectIfAuthenticated,
      children: [{ path: '', name: 'login', component: LoginView }]
    },
    {
      path: '/register', //colocar Authcomponent aqui
      children: [{ path: '', name: 'register', component: RegisterView }]
    },
    {
      path: '/forgot-password',
      children: [
        { path: '', name: 'forgot-password', component: ForgotPasswordView }
      ]
    },
    {
      path: '/reset-password',
      children: [
        { path: '', name: 'reset-password', component: ResetPasswordView }
      ]
    },
    {
      path: '/profile', //colocar Authcomponent aqui
      beforeEnter: Guard.redirectIfNotAuthenticated,
      children: [{ path: '', name: 'profile', component: ProfileView }]
    },
    {
      path: '/contact', //colocar Authcomponent aqui
      beforeEnter: Guard.redirectIfNotAuthenticated,
      children: [{ path: '', name: 'contact', component: ContactView }]
    },
    {
      path: '/posts/:url',
      children: [{ path: '', name: 'post-view', component: PostView }]
    }
  ]
})

export default router
