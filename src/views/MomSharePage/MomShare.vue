<template>
  <MobileOnly>
    <div class="momshare-bg font-sans text-[#2f5133]">
      <div class="progress-section">
        <div class="title-row">
          <RouterLink to="/" class="back-icon-btn" aria-label="回首頁">
            <!-- 使用 SVG icon -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4b814b"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </RouterLink>
          <h1 class="text-2xl md:text-4xl font-bold">森森邏輯 × 宅媽干啥?</h1>
        </div>
        <p class="text-sm md:text-lg mt-2 what-description">
          最初宅媽是從前端工程師開始踏入網頁世界的。簡單來說，前端工程師就像是網頁的設計師，讓畫面會動、操作順暢，使用者體驗更好
          也因為前端變化快速，才有了「宅媽干啥？」這個學習筆記，一起學習、一起成長。
        </p>
        <h3 class="progress-title">30 天學習 Vue3 ({{ completedDays }}/30 天)</h3>
        <ProgressBar :progress="completedDays / 30" />
      </div>
      <div class="cards-section">
        <div v-for="(day, idx) in days" :key="day.id">
          <DayCard :day="day" @complete="markComplete(idx)" />
        </div>
      </div>
    </div>
  </MobileOnly>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import ProgressBar from "@/components/ProgressBar.vue";
import DayCard from "@/components/DayCard.vue";
import MobileOnly from '@/components/MobileOnly.vue'

const days = ref([
  {
    id: 1,
    title: "Vue 3 是什麼?",
    detail:
      "Vue 3 是一個漸進式的前端框架，能快速打造互動式網頁。它具備響應式系統、組件化設計與 Composition API，透過 .vue 單文件組件實作畫面、邏輯與樣式整合，是現代前端工程師的重要工具。今天從最基本的組件實作開始！",
    router: "/day1",
    comming_soon:false,
  },
  {
    id: 2,
    title: "組件拆分與父子傳值",
    detail:
      "學習如何將畫面切成多個小組件，並透過 props 傳值與 emit 傳事件，建立組件間的溝通機制。實作 Todo List，從輸入、顯示到刪除，體驗 Vue 最基本的資料流動方式！",
    router: "/day2",
    comming_soon:true,
  },
  {
    id: 3,
    title: "生命周期 Hook 與資料監控",
    detail:
      "深入理解 Vue 的 computed 與 watch 差異，掌握資料變動的監控與處理時機。透過優化版 Todo List，加入完成狀態切換與資料同步，進一步體驗組件間的互動與資料追蹤技巧！",
    router: "/day3",
    comming_soon:true,
  },
]);

const completedDays = days.value.length;

function markComplete(idx) {
  days.value[idx].completed = true;
}
</script>

<style>
.momshare-bg {
  min-height: 100vh;
  background: #f8f8e8 url("@/assets/rabbit_computer_upscaled.png") center bottom
    no-repeat fixed;
  background-size: contain;
  padding: 0;
}
.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 4px;
}
.back-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0f2d8;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 4px;
  transition: background 0.2s;
  border: 2px solid #a3d3a1;
}
.back-icon-btn:hover {
  background: #b7e5b4;
  box-shadow: 0 2px 8px #0001;
}
.what-description {
  padding: 0 16px;
  text-align: justify;
}
h1 {
  margin: 8px;
}
.progress-section {
  max-width: 420px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
}
.progress-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #3a5a40;
  margin-bottom: 16px;
  letter-spacing: 1px;
}
.cards-section {
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px 40px 16px;
}

</style>