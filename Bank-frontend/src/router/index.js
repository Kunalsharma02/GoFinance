import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import DepositPage from '@/views/DepositPage.vue'
import WithdrawPage from '@/views/WithdrawPage.vue'
import TransferPage from '@/views/TransferPage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },

  {
    path: '/home',
    name: 'home',
    component: HomePage
  },

  {
    path: '/deposit',
    name: 'deposit',
    component: DepositPage
  },

  {
    path: '/withdraw',
    name: 'withdraw',
    component: WithdrawPage
  },

  {
    path: '/transfer',
    name: 'transfer',
    component: TransferPage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
