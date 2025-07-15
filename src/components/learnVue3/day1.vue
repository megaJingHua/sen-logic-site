
<template>
  <div>
    <div v-if="!isMobile" class="only-mobile">
      <div class="mobile-warning">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f8d7da"/><path d="M12 8v4m0 4h.01" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/></svg>
        <p>僅限手機瀏覽，請縮小視窗或用手機開啟</p>
      </div>
    </div>
    <div v-else class="learn-bg min-h-screen py-8 px-2 flex flex-col items-center font-sans">
      <div class="w-full max-w-2xl bg-white rounded-xl shadow-md border-2 border-[#a3d3a1] p-6">
        <div class="title-row">
          <RouterLink to="/learn-vue3" class="back-icon-btn" aria-label="返回列表">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b814b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </RouterLink>
          <h1 class="text-2xl md:text-3xl font-bold text-[#2f5133]">Day1 Vue 3 是什麼?</h1>
        </div>
        <ul class="list-disc pl-6 mb-4 text-[#3a5a40] leading-relaxed">
          <li>
            一個 <b>漸進式框架</b>：可以只用來寫前端 UI，也能搭配 Vue Router、Pinia 做完整 SPA。
          </li>
          <li>
            核心特性：
            <ul class="list-disc pl-4">
              <li><b>響應式系統（reactivity）</b>：資料改變時畫面自動更新，不需手動更新 DOM。</li>
              <li><b>組件化（component-based）</b>：把畫面拆成可重複使用的小積木，每個積木管理自己的資料和樣式。</li>
              <li><b>Composition API</b>（setup、ref、reactive、computed）：Vue 3 新寫法，讓資料、方法、監聽等能清楚集中管理並靈活重用。</li>
              <li><b>單文件組件（.vue 檔案）</b>：一個檔案包含 template、script、style，畫面、邏輯、樣式整合。</li>
            </ul>
          </li>
        </ul>
        <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">🌱 什麼是「漸進式框架」？</h2>
        <div class="mb-4 text-[#3a5a40] leading-relaxed">
          <b>漸進式框架（Progressive Framework）</b> 指的是：
          <blockquote class="border-l-4 border-[#a3d3a1] pl-4 my-2 text-[#2f5133] bg-[#f8f8e8]">
            你可以從小用起（小功能 / 小區塊），需要時再逐步引入更多功能與架構，而非一開始就需要學會整個龐大架構才能使用。
          </blockquote>
        </div>
        <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">Vue 3 基本結構</h2>
        <div class="mb-2 text-[#3a5a40]">做一個最基本的 <code>.vue</code> 組件，顯示 message 文字，並製作一個 Button 點擊後數字+1：</div>
        <pre class="code-block"><code>&lt;!-- HTML 區塊 --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click=\"count++\"&gt;點我：{{ count }}&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- JavaScript 區塊 --&gt;
&lt;script setup&gt;
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
const count = ref(0)
&lt;/script&gt;

&lt;!-- CSS 區塊 --&gt;
&lt;style scoped&gt;
h1 {
  color: #42b983;
}
&lt;/style&gt;</code></pre>
        <div class="demo-area mt-6">
          <h3 class="font-bold text-[#4b814b] mb-2">互動小練習</h3>
          <p v-pre class="mb-2 text-[#3a5a40]">
            ✅ 顯示綁定文字 {{ message }}<br />
            ✅ 製作按鈕點擊後數字+1<br />
          </p>
          <button @click="count++" class="demo-btn">點我：{{ count }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from 'vue-router';
const message = ref("Day1 Vue 3 是什麼?(實作 .vue 基本組件)");
const count = ref(0);
const isMobile = ref(true);

function checkMobile() {
  isMobile.value = window.innerWidth <= 600;
}
onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.learn-bg {
  background: #f8f8e8;
}
.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
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
.code-block {
  background-color: #f8f8e8;
  border: 1.8px solid #b1b1b1;
  border-radius: 8px;
  padding: 12px;
  overflow-x: auto;
  text-align: left;
  font-size: 14px;
  margin: 8px 0;
}
.demo-area {
  text-align: left;
  margin-top: 16px;
}
.demo-btn {
  background: #4b814b;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 18px;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 4px;
  transition: background 0.2s;
}
.demo-btn:hover {
  background: #376637;
}
.only-mobile {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8e8;
}
.mobile-warning {
  text-align: center;
  color: #b91c1c;
  font-size: 1.2em;
  background: #fff0f1;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 2px 12px #0001;
  max-width: 320px;
}
.mobile-warning svg {
  margin-bottom: 12px;
}
</style> 