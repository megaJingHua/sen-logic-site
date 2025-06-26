<template>
  <div class="font-sans min-h-screen text-center flex flex-col items-center bg-no-repeat bg-bottom bg-contain bg-[#d3e4b1] bg-[url('@/assets/home-banner-bg.png')] md:bg-[url('@/assets/home-banner-pc.png')]">
    <!-- 主視覺圖層 -->
    <div class="w-full relative md:h-[800px] h-[600px]">
      <img src="@/assets/home-banner-mobile.png" class="md:hidden w-full h-full object-cover" alt="首頁背景手機版" />
      <img src="@/assets/home-banner-pc.png" class="hidden md:block w-full h-full object-cover" alt="首頁背景桌機版" />

      <!-- 上方文字：標題 + 副標 -->
      <div class="absolute top-[80px] md:top-[80px] left-1/2 -translate-x-1/2 text-[#2f5133] text-center z-10 w-[90%] max-w-xl">
        <h1 class="text-2xl md:text-4xl font-bold">寶哥媽咪 × 森森邏輯</h1>
        <p class="text-sm md:text-lg mt-2">親子一起玩邏輯，啟動未來程式腦</p>
      </div>

      <!-- 下方按鈕群組 -->
      <div class="absolute top-[470px] md:top-[470px] left-1/2 -translate-x-1/2 flex flex-wrap gap-3 justify-center z-10">
        <RouterLink to="/explore" class="btn">幼兒探索</RouterLink>
        <RouterLink to="/parents" class="btn">家長專區</RouterLink>
        <RouterLink to="/parents" class="btn">宅媽分享</RouterLink>
        <RouterLink to="/support" class="btn">贊助我們</RouterLink>
      </div>

      <!-- 半透明卡片：啟程篇介紹 -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md z-10">
        <h2 class="text-lg md:text-xl font-bold mb-2 text-[#2f5133]">《啟程篇》</h2>
        <p class="text-sm md:text-base text-[#2f5133] mb-4">PDF教材 ＋ 貼紙挑戰包</p>
        <button class="btn">下載試閱</button>
      </div>
    </div>

    <!-- 延伸草地背景區 -->
    <div class="flex-1 w-full pt-10"></div>

    <!-- Footer -->
    <div class="text-xs md:text-sm text-gray-500 mt-10 mb-6 z-10">
      © 2025 森森邏輯
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.btn {
  padding: 0.5rem 1.25rem;
  margin: 3px;
  background-color: #4b814b;
  color: white;
  border-radius: 10px;
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

h1, h2, p {
    margin:5px
}

</style>
