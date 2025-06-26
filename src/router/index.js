import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/explore', component: { template: '<div>探索內容開發中</div>' } },
  { path: '/parents', component: { template: '<div>家長專區</div>' } },
  { path: '/support', component: { template: '<div>贊助我們</div>' } },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})