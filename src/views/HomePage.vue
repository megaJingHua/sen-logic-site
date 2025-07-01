<template>
  <div
    class="font-sans min-h-screen text-center flex flex-col items-center bg-no-repeat bg-bottom bg-contain md:bg-[url('@/assets/home-banner-pc.png')]"
  >
    <!-- 主視覺 -->
    <div class="w-full relative md:h-[800px] h-[600px]">
      <img
        src="@/assets/home-banner-mobile.png"
        class="md:hidden w-full h-full object-cover"
        alt="首頁背景手機版"
      />
      <img
        src="@/assets/home-banner-pc.png"
        class="hidden md:block w-full h-full object-cover"
        alt="首頁背景桌機版"
      />

      <!-- 標題、副標 -->
      <div
        class="absolute top-[80px] md:top-[80px] left-1/2 -translate-x-1/2 text-[#2f5133] text-center z-10 w-[90%] max-w-xl"
      >
        <h1 class="text-2xl md:text-4xl font-bold">寶哥媽咪 × 森森邏輯</h1>
        <p class="text-sm md:text-lg mt-2">親子一起玩邏輯，啟動未來程式腦</p>
      </div>

      <!-- Button 幼兒探索、家長專區、宅媽分享、贊助我們 -->
      <div
        class="absolute top-[450px] md:top-[470px] left-1/2 -translate-x-1/2 flex flex-wrap gap-3 justify-center z-10"
      >
        <RouterLink to="/explore" class="btn">
          <PuzzlePieceIcon
            class="h-5 w-5 mr-2 inline-block"
          />幼兒探索</RouterLink
        >
        <RouterLink to="/parents" class="btn"
          ><UserGroupIcon
            class="h-5 w-5 mr-2 inline-block"
          />家長專區</RouterLink
        >
        <RouterLink to="/parents" class="btn">宅媽分享</RouterLink>
        <RouterLink to="/support" class="btn">贊助我們</RouterLink>
      </div>

      <!-- 啟程篇 -->
        <JourneyArticle />
      <!-- Footer -->
      <p>© 2025 森森邏輯</p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import JourneyArticle from '@/components/JourneyArticle.vue'
import {
  PuzzlePieceIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from "@heroicons/vue/24/solid";
</script>

<style scoped>
.btn {
  padding: 0.3rem 1rem;
  margin: 3px;
  background-color: #4b814b;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;
  display: inline-block;
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .btn {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}

.btn:hover {
  background-color: #376637;
}

h1,
h2,
h3,
p {
  margin: 10px;
}

</style>
