
<template>
  <MobileOnly>
    <div
      class="learn-page min-h-screen bg-[#f8f8e8] py-8 px-2 flex flex-col items-center font-sans text-[#2f5133]"
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
          <h2 class="text-2xl md:text-4xl font-bold">Day1 Vue 3 是什麼?</h2>
        </div>

        <div class="day-content mb-4 text-[#3a5a40]">
          你現在看到的網頁畫面，大多是用「前端框架」做出來的。Vue 3
          就是其中一個超人氣框架，它就像「做互動網頁的積木工具箱」，讓工程師能快速拼出會動的網頁畫面。<br /><br />
          <h2 class="text-xl font-bold text-[#4b814b]">
            🌱 Vue3 最厲害的地方是？
          </h2>
          <p>
            💡 資料變了，畫面就會自動改！<br />
            不用自己重畫整個畫面，像是魔法一樣幫你更新。<br /><br />
            🧩 可以把畫面拆成一塊塊組件重複用<br />
            就像做樂高積木一樣，把按鈕、卡片、清單拆成小單位來組合整頁。<br /><br />
            🧠 有清楚的寫法，資料、邏輯、畫面都可以集中管理<br />
            工程師看得懂、改得快。<br /><br />
          </p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            📦今天的實作是什麼?
          </h2>
          <p>
            我們會做一個超級簡單的小畫面：<br /><br />
            ✅顯示'Hallo Vue3!'一句話<br />✅一個按鈕，按一下數字就會加 1！<br /><br />
            這是每個 Vue
            開發者的第一個練習，學會這個，你就可以開始動手做小功能啦！<br />
          </p>
          <b>小功能 Demo:</b> <br />
          <div
            class="demo-block bg-[#f8f8e8] rounded-lg p-4 overflow-x-auto text-sm mb-4"
          >
            <code>
              <p>{{ message }}</p>
              <button @click="count++">點我：{{ count }}</button>
            </code>
          </div>

          <b>程式碼 Demo:</b> <br />

          <pre
            v-pre
            class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
          ><code><span style="color: #6a9955; font-style: italic;">&lt;!-- HTML 區塊  (畫面呈現的內容)--&gt;</span>
<span style="color: #569cd6;">&lt;template&gt;</span>
  <span style="color: #569cd6;">&lt;div&gt;</span>
    <span style="color: #569cd6;">&lt;h1&gt;</span>{{ <span style="color: #9cdcfe;">message</span> }}<span style="color: #569cd6;">&lt;/h1&gt;</span>
    <span style="color: #569cd6;">&lt;button</span> <span style="color: #9cdcfe;">@click</span>=<span style="color: #ce9178;">"count++"</span><span style="color: #569cd6;">&gt;</span>點我：{{ <span style="color: #9cdcfe;">count</span> }}<span style="color: #569cd6;">&lt;/button&gt;</span>
  <span style="color: #569cd6;">&lt;/div&gt;</span>
<span style="color: #569cd6;">&lt;/template&gt;</span>

<span style="color: #6a9955; font-style: italic;">&lt;!-- JavaScript 區塊  (內容中的動作設定)--&gt;</span>
<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">ref</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'vue'</span>

<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">message</span> = <span style="color: #dcdcaa;">ref</span>(<span style="color: #ce9178;">'Hello Vue 3!'</span>)
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">count</span> = <span style="color: #dcdcaa;">ref</span>(<span style="color: #b5cea8;">0</span>)
<span style="color: #569cd6;">&lt;/script&gt;</span>

<span style="color: #6a9955; font-style: italic;">&lt;!-- CSS 區塊 (內容顯示的樣式)--&gt;</span>
<span style="color: #569cd6;">&lt;style</span> <span style="color: #9cdcfe;">scoped</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #d7ba7d;">h1</span> {
  <span style="color: #9cdcfe;">color</span>: <span style="color: #b5cea8;">#42b983</span>;
}
<span style="color: #569cd6;">&lt;/style&gt;</span></code></pre>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            🌱術業有專攻
          </h2>

          <ul class="list-disc pl-6 mb-4 text-[#3a5a40]">
            <li>
              Vue 3 是一個
              <b>漸進式框架（Progressive Framework）</b>：可以只用來寫前端
              UI，也能搭配 Vue Router、Pinia 做完整
              SPA，簡單來說可以從小用起（小功能 /
              小區塊），需要時再逐步引入更多功能與架構，而非一開始就需要學會整個龐大架構才能使用。
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
        </div>
      </div>
    </div>
  </MobileOnly>
</template>

<script setup>
import { ref } from "vue";
import MobileOnly from "@/components/MobileOnly.vue";
const message = ref("Hello Vue3!");
const count = ref(0);
</script>

<style scoped>
h3,
h2 {
  color: #42b983;
  margin-top: 10px;
}

p {
  padding-left: 20px;
}
</style>