import { createRouter, createWebHistory } from 'vue-router'
import LearnVue3 from '@/views//MomSharePage/LearnVue3/LearnVue3.vue'
import HomePage from '@/views/HomePage.vue'
import MomShare from '@/views/MomSharePage/MomShare.vue'
import day1 from '@/components/learnVue3/day1.vue'
import day2 from '@/components/learnVue3/day2/day2.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/explore', component: { template: '<div>探索內容開發中</div>' } },
  { path: '/parents', component: { template: '<div>家長專區</div>' } },
  { path: '/mom-share', component:  MomShare},
  { path: '/support', component: { template: '<div>贊助我們</div>' } },
  {
    path: '/learn-vue3',
    component: LearnVue3,
    children: [
      { path: 'day1', name: 'LearnDay1', component: day1 },
      { path: 'day2', name: 'LearnDay2', component: day2 },
    ]
  }
]

export default createRouter({
  history: createWebHistory('/sen-logic-site/'),
  routes,
})