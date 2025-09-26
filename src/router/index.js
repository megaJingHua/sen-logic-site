import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MomShare from '@/views/MomSharePage/MomShare.vue'
import day1 from '@/components/learnVue3/day1.vue'
import day2 from '@/components/learnVue3/day2/day2.vue'
import day3 from '@/components/learnVue3/day3/day3.vue'
import day4 from '@/components/learnVue3/day4.vue'
import day5 from '@/components/learnVue3/day5.vue'
import day6 from '@/components/learnVue3/day6.vue'
import day7 from '@/components/learnVue3/day7.vue'
import day8 from '@/components/learnVue3/day8.vue'
import day9 from '@/components/learnVue3/day9.vue'
import day10 from '@/components/learnVue3/day10.vue'
import day11 from '@/components/learnVue3/day11.vue'
import day12 from '@/components/learnVue3/day12.vue'
import day13 from '@/components/learnVue3/day13.vue'
import day14 from '@/components/learnVue3/day14.vue'
import day15 from '@/components/learnVue3/day15.vue'
import day16 from '@/components/learnVue3/day16.vue'
import day17 from '@/components/learnVue3/day17.vue'
import day18 from '@/components/learnVue3/day18.vue'
import day19 from '@/components/learnVue3/day19.vue'
import day20 from '@/components/learnVue3/day20.vue'
import day21 from '@/components/learnVue3/day21.vue'
import day22 from '@/components/learnVue3/day22.vue'
import day23 from '@/components/learnVue3/day23.vue'
import day24 from '@/components/learnVue3/day24.vue'
import day25 from '@/components/learnVue3/day25.vue'
import day26 from '@/components/learnVue3/day26.vue'
import day27 from '@/components/learnVue3/day27.vue'
import day28 from '@/components/learnVue3/day28.vue'
import day29 from '@/components/learnVue3/day29.vue'
import day30 from '@/components/learnVue3/day30.vue'
import puzzleGame2 from '@/components/puzzleGame2.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/explore', component: puzzleGame2 },
  { path: '/parents', component: { template: '<div>家長專區</div>' } },
  { path: '/mom-share', component: MomShare },
  { path: '/support', component: { template: '<div>贊助我們</div>' } },
  { path: '/learn-vue3/day1', component: day1 },
  { path: '/learn-vue3/day2', component: day2 },
  { path: '/learn-vue3/day3', component: day3 },
  { path: '/learn-vue3/day4', component: day4 },
  { path: '/learn-vue3/day5', component: day5 },
  { path: '/learn-vue3/day6', component: day6 },
  { path: '/learn-vue3/day7', component: day7 },
  { path: '/learn-vue3/day8', component: day8 },
  { path: '/learn-vue3/day9', component: day9 },
  { path: '/learn-vue3/day10', component: day10 },
  { path: '/learn-vue3/day11', component: day11 },
  { path: '/learn-vue3/day12', component: day12 },
  { path: '/learn-vue3/day13', component: day13 },
  { path: '/learn-vue3/day14', component: day14 },
  { path: '/learn-vue3/day15', component: day15 },
  { path: '/learn-vue3/day16', component: day16 },
  { path: '/learn-vue3/day17', component: day17 },
  { path: '/learn-vue3/day18', component: day18 },
  { path: '/learn-vue3/day19', component: day19 },
  { path: '/learn-vue3/day20', component: day20 },
  { path: '/learn-vue3/day21', component: day21 },
  { path: '/learn-vue3/day22', component: day22 },
  { path: '/learn-vue3/day23', component: day23 },
  { path: '/learn-vue3/day24', component: day24 },
  { path: '/learn-vue3/day25', component: day25 },
  { path: '/learn-vue3/day26', component: day26 },
  { path: '/learn-vue3/day27', component: day27 },
  { path: '/learn-vue3/day28', component: day28 },
  { path: '/learn-vue3/day29', component: day29 },
  { path: '/learn-vue3/day30', component: day30 },
]

export default createRouter({
  history: createWebHistory('/sen-logic-site/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})