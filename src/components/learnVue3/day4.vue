
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
          <h2 class="text-2xl md:text-4xl font-bold">
            Day4 從單一房間到多房間—Vue Router
          </h2>
        </div>

        <div class="day-content mb-4 text-[#3a5a40]">
          你可以把「網站」想成一間房子，<strong>房子的大門</strong>就是你的首頁
          (Home)，<strong>房間</strong>就像每個不同的功能頁面，
          而<strong>走廊</strong>就是
          Router（路由），它負責帶你從大門走到不同的房間。<br /><br />
          <h2 class="text-xl font-bold text-[#4b814b]">
            🚪 Vue Router 是什麼？
          </h2>
          <p>
            就像家裡有走廊和門牌號碼，讓你可以<strong>走到不同的房間</strong>。在網站裡，這個「房間」就是不同的頁面。<br />
            例如：<br />
            / → 首頁<br />
            /about → 關於我們<br />
            /game → 遊戲區<br />
            <br /><br />
          </p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            📦今天的實作是什麼?
          </h2>
          <p>
            我們會做一個可點擊「首頁」出現首頁內容，點擊「關於」出現介紹內容。就像家裡不用蓋兩間房子，同一個大門進去，走不同走廊就能到不同房間。
          </p>

          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-4">
            📝 程式碼 Demo
          </h2>

          <div class="space-y-6">
            <!-- 步驟 1 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 1. 先裝 Router（走廊建材）
              </h3>
              <p class="mb-3">就像先買一條長廊，讓房間可以連起來。</p>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">npm</span> <span style="color: #dcdcaa;">install</span> <span style="color: #9cdcfe;">vue-router</span></code></pre>
            </div>

            <!-- 步驟 2 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 2. 畫設計圖（router.js）
              </h3>
              <p class="mb-3">
                告訴 Vue：「有幾個房間？門牌是多少？」還需要告訴 Vue 房間的內容
              </p>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">import</span> <span style="color: #4ec9b0;">Home</span> <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'./views/Home.vue'</span>
<span style="color: #569cd6;">import</span> <span style="color: #4ec9b0;">About</span> <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'./views/About.vue'</span>

<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">routes</span> = [
  { <span style="color: #9cdcfe;">path</span>: <span style="color: #ce9178;">'/'</span>, <span style="color: #9cdcfe;">component</span>: <span style="color: #4ec9b0;">Home</span> },   <span style="color: #6a9955; font-style: italic;">// 大門 → 首頁</span>
  { <span style="color: #9cdcfe;">path</span>: <span style="color: #ce9178;">'/about'</span>, <span style="color: #9cdcfe;">component</span>: <span style="color: #4ec9b0;">About</span> } <span style="color: #6a9955; font-style: italic;">// 另一個房間 → 關於我們</span>
]</code></pre>
            </div>

            <!-- 步驟 3 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅3. 把走廊裝到房子裡（main.js）
              </h3>
              <p class="mb-3">就是讓房子知道要用這個走廊來切換房間。</p>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">import</span> <span style="color: #9cdcfe;">router</span> <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'./router'</span></code></pre>
            </div>

            <!-- 步驟 4 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅4. 放一個「導航菜單」(App.vue)
              </h3>
              <p class="mb-3">
                就像家裡玄關放了兩個牌子：「去客廳」、「去廚房」。
              </p>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">&lt;router-link</span> <span style="color: #9cdcfe;">to</span>=<span style="color: #ce9178;">"/"</span><span style="color: #569cd6;">&gt;</span>首頁<span style="color: #569cd6;">&lt;/router-link&gt;</span>
<span style="color: #569cd6;">&lt;router-link</span> <span style="color: #9cdcfe;">to</span>=<span style="color: #ce9178;">"/about"</span><span style="color: #569cd6;">&gt;</span>關於我們<span style="color: #569cd6;">&lt;/router-link&gt;</span></code></pre>
              <p class="mb-3">
                當你點導航的時候，網站會把「顯示的頁面」換掉，就像你走到另一間房。
              </p>
            </div>
          </div>
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