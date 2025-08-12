<template>
  <MobileOnly>
    <div class="momshare-bg font-sans text-[#2f5133]">
      <div class="progress-section">
        <div class="title-row">
          <RouterLink to="/" class="back-icon-btn" aria-label="回首頁">
            <!-- 使用 SVG icon -->
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 24"
              fill="none"
              stroke="#4b814b"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </RouterLink>
          <h1 class="text-2xl md:text-4xl font-bold">森森邏輯×宅媽干啥</h1>
        </div>
        <p class="text-sm md:text-lg mt-2 what-description">
          最初宅媽是從前端工程師開始踏入網頁世界的。簡單來說，前端工程師就像是網頁的設計師，讓畫面會動、操作順暢，使用者體驗更好
          也因為前端變化快速，才有了「宅媽干啥？」這個學習筆記，一起學習、一起成長。
        </p>
        <h3 class="progress-title">
          30 天學習 Vue3 ({{ completedDays }}/30 天)
        </h3>
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
import MobileOnly from "@/components/MobileOnly.vue";

const days = ref([
  {
    id: 1,
    title: "Vue 3 是什麼?",
    detail:
      "你現在看到的網頁畫面，大多是用「前端框架」做出來的。Vue 3 就是其中一個超人氣框架，它就像「做互動網頁的積木工具箱」，讓工程師能快速拼出會動的網頁畫面。",
    router: "/day1",
    comming_soon: false,
  },
  {
    id: 2,
    title: "組件是什麼？我為什麼要拆？",
    detail:
      "  你可以把網頁想像成一個樂高積木城堡。每個「積木」就是一個組件（component）比如：按鈕是一塊積木、輸入框是一塊積木、待辦清單的每一項也是一塊積木。今天帶你用最簡單的例子——「Todo List」來學會：✅組件拆分 ✅父子傳值 ✅用 props 傳資料，用emit 回報訊息！",
    router: "/day2",
    comming_soon: false,
  },
  {
    id: 3,
    title: "computed 和 watch 怎麼幫你「看家」？",
    detail:
      "媽媽每天最怕什麼？就是「重複問問題、重複做事情」。電鍋要煮飯 → 看燈變沒？小孩洗完澡 → 地上濕沒？這些「重複檢查」、「自動反應」的事，Vue 也有喔！今天要認識兩個 Vue 的小幫手：computed, watch!",
    router: "/day3",
    comming_soon: false,
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
  background: #f8f8e8 url("@/assets/mom-share.png") center center
    no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 0;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.momshare-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.055);
  z-index: 1;
  pointer-events: none;
}

/* iOS Safari 特定優化 */
@supports (-webkit-touch-callout: none) {
  .momshare-bg {
    background-attachment: scroll;
    -webkit-background-size: cover;
    background-size: cover;
  }
}
.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 4px;
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
  position: relative;
  z-index: 2;
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
  position: relative;
  z-index: 2;
}
</style>