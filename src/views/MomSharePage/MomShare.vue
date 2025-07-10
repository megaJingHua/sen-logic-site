<template>
  <div
    class="font-sans min-h-screen text-center flex flex-col items-center bg-no-repeat bg-bottom bg-contain md:bg-[url('@/assets/mom-share-bk.png')] w-full relative md:h-[800px] h-[600px]"
  >
    <!-- 主視覺 -->
    <img
      src="@/assets/mom-share-bk.png"
      class="absolute bottom-0 left-0 w-full object-cover z-0"
      alt="首頁背景手機版"
    />
    <div
      class="absolute top-[20px] md:top-[20px] left-1/2 -translate-x-1/2 text-[#2f5133] text-center z-10 w-[95%] max-w-xl"
    >
      <h1>森森邏輯 | 宅媽分享</h1>
      <div class="share-area">
        <h2>30 Days 學習 Vue 3 計畫</h2>
        <p class="text-left">
          架設森森邏輯網頁時，順便練個功!從前端工程師轉到分析師後就沒有再精進前端技能，這次能回歸偷練個功挺開心的:)
        </p>
        <ul>
          <li v-for="day in vue3Days" :key="day.day">
            <router-link :to="day.route"
              >Day {{ day.day }}：{{ day.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const vue3Days = ref([
  { day: 1, title: "Vue 3 是什麼?(實作 .vue 基本組件)", route: "/learn-vue3/day1" },
  { day: 2, title: "組件拆分與父子傳值 (實作: Todo List)", route: "/learn-vue3/day2" },
]);
</script>

<style scoped>
.mom-share {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 8px 0;
}
a {
  color: #42b983;
}
a:hover {
  text-decoration: underline;
}
img {
  filter: sepia(40%);
}
.share-area {
  background-color:#ffffff38;
  padding:5px;
  border-radius: 8px;
}
h2 {
  margin: 8px;
}
p {
  margin: 4px;
  text-align:justify;
}
</style>