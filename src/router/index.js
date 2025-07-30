import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MomShare from '@/views/MomSharePage/MomShare.vue'
import day1 from '@/components/learnVue3/day1.vue'
import day2 from '@/components/learnVue3/day2/day2.vue'
import puzzleGame2 from '@/components/puzzleGame2.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/explore', component: puzzleGame2 },
  { path: '/parents', component: { template: '<div>家長專區</div>' } },
  { path: '/mom-share', component: MomShare },
  { path: '/support', component: { template: '<div>贊助我們</div>' } },
  { path: '/learn-vue3/day1', component: day1 },
  { path: '/learn-vue3/day2', component: day2 }
]

export default createRouter({
  history: createWebHistory('/sen-logic-site/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})