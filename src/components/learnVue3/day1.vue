
<template>
<MobileOnly>
  <div
    class="min-h-screen bg-[#f8f8e8] py-8 px-2 flex flex-col items-center font-sans text-[#2f5133]"
  >
    <div class="w-full text-left text-justify">
      <div class="title-row">
        <RouterLink to="/mom-share" class="back-icon-btn" aria-label="回首頁">
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
        <h1 class="text-2xl md:text-4xl font-bold">Day1 Vue 3 是什麼?</h1>
      </div>
      <div class="day-content">
        <ul class="list-disc pl-6 mb-4 text-[#3a5a40]">
          <li>
            一個 <b>漸進式框架</b>：可以只用來寫前端 UI，也能搭配 Vue
            Router、Pinia 做完整 SPA。
          </li>
          <li>
            核心特性：
            <ul class="list-disc pl-4">
              <li>
                <b>響應式系統（reactivity）</b>
                當資料改變時，畫面會自動更新，不需手動更新 DOM。
              </li>
              <li>
                <b>組件化（component-based）</b>
                把畫面拆成可重複使用的小積木，每個積木（組件）管理自己的資料和樣式。
              </li>
              <li>
                <b>Composition API</b>（setup、ref、reactive、computed）Vue 3
                新的寫法，讓資料、方法、監聽等能清楚集中管理並更靈活重用。
              </li>
              <li>
                <b>單文件組件（.vue 檔案）</b> 一個檔案包含：<code
                  >template</code
                >
                (HTML 區塊)、<code>script</code> (JavaScript 區塊)、<code
                  >style</code
                >
                (CSS 區塊)，在同一個檔案就能看到該組件的畫面、邏輯和樣式。
              </li>
            </ul>
          </li>
        </ul>
        <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
          🌱 什麼是「漸進式框架」？
        </h2>
        <div class="mb-4 text-[#3a5a40]">
          <b>漸進式框架（Progressive Framework）</b> 指的是：
          <blockquote
            class="border-l-4 border-[#a3d3a1] pl-4 my-2 text-[#2f5133] bg-[#f8f8e8]"
          >
            你可以從小用起（小功能 /
            小區塊），需要時再逐步引入更多功能與架構，而非一開始就需要學會整個龐大架構才能使用。
          </blockquote>
        </div>
        <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
          Vue 3 基本結構
        </h2>
        <div class="mb-2 text-[#3a5a40]">
          實做一個最基本的 <code>.vue</code> 組件
          <p v-pre class="mb-2 text-[#3a5a40]">
            ✅ 顯示綁定文字 {{ message }}<br />
          </p>

          <p>{{ message }}</p>
          <p>✅ 製作按鈕點擊後數字+1<br /></p>
          <button @click="count++">點我：{{ count }}</button>
        </div>
        <pre
          v-pre
          class="code-block bg-[#f8f8e8] rounded-lg p-4 overflow-x-auto text-sm mb-4"
        ><code>&lt;!-- HTML 區塊 --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="count++"&gt;點我：{{ count }}&lt;/button&gt;
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
      </div>
    </div>
  </div>
  </MobileOnly>
</template>

<script setup>
import { ref } from "vue";
import MobileOnly from '@/components/MobileOnly.vue'
const message = ref("Hallo Vue3!");
const count = ref(0);
</script>

<style scoped>
h3,
h2 {
  color: #42b983;
  margin: 10px;
}

.code-block {
  background-color: #ebebeb;
  border: 1.8px solid #b1b1b1;
  border-radius: 8px;
  padding: 12px;
  overflow-x: auto;
  text-align: left;
  font-size: 14px;
  margin: 8px;
}
.day-content {
  background-color: #f8f8e8;
  padding: 0px 16px;
  margin: 16px 0;
}
.title-row {
  padding: 16px;
}
</style> 