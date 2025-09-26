
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
            Day5 網站的公共冰箱 —— Pinia 狀態管理
          </h2>
        </div>

        <div class="day-content mb-4 text-[#3a5a40]">
          在 Vue
          專案中，如果不同頁面或元件都需要同一份資料（像「登入使用者」、「購物車」、「計數器」），光靠
          props 與 emit 傳來傳去會變得很複雜。<br /><br />

          👉 這時候就需要「狀態管理工具」來集中管理。<br />

          <strong>Pinia</strong> 是 Vue3
          官方推薦的狀態管理工具，功能就像一台「網站的公共冰箱」： <br /><br />-
          任何頁面都可以隨時存取或更新資料。 <br />-
          就算換頁、切換元件，資料還是保留。

          <h2 class="text-xl font-bold text-[#4b814b]">👩‍🍼 寶媽角度</h2>
          <p>
            家裡有很多房間：<br /><br />- - 客廳：寶寶要喝牛奶<br />-
            廚房：媽媽煮飯要牛奶<br />- 書房：爸爸泡咖啡也要牛奶<br /><br />

            如果每個房間都放一瓶牛奶，不但容易忘記數量，還會浪費空間。<br /><br />

            👉 解決辦法：大家共用一台冰箱，牛奶集中放好，誰要喝就直接去拿。<br /><br />

            Pinia 就是這台「網站的冰箱」，專門用來集中保存重要的資料。
          </p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            💻 工程師角度
          </h2>
          <p>
            <strong>Pinia</strong>：Vue3 官方推薦的狀態管理工具（取代 Vuex）。 -
            <br /><br /><strong>核心概念</strong>：<br />
            - <strong>state</strong>：資料（牛奶、雞蛋）。<br />
            - <strong>actions</strong>：方法（煮飯、喝牛奶）。<br />
            - <strong>getters</strong>：計算值（剩幾瓶牛奶）。<br /><br />
            - <strong>優點</strong>：<br />
            - API 簡單、易學。<br />
            - 支援 TypeScript。<br />
            - 不需 props/emit，元件間共用資料更乾淨。
          </p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            📦 今天的實作
          </h2>
          <p>
            需求：<br /><br />

            1. 在首頁按「+1」按鈕。<br />
            2. 切換到關於頁，數字還是一樣（不會重置）。<br />
          </p>

          <div class="space-y-6">
            <!-- 步驟 1 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 1. 安裝 Pinia
              </h3>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">npm</span> <span style="color: #dcdcaa;">install</span> <span style="color: #9cdcfe;">pinia</span></code></pre>
            </div>

            <!-- 步驟 2 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 2. 在 main.js 掛載
              </h3>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">createApp</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'vue'</span>
<span style="color: #569cd6;">import</span> <span style="color: #4ec9b0;">App</span> <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'./App.vue'</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">createPinia</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'pinia'</span>

<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">app</span> = <span style="color: #dcdcaa;">createApp</span>(<span style="color: #4ec9b0;">App</span>)
<span style="color: #9cdcfe;">app</span>.<span style="color: #dcdcaa;">use</span>(<span style="color: #dcdcaa;">createPinia</span>())
<span style="color: #9cdcfe;">app</span>.<span style="color: #dcdcaa;">mount</span>(<span style="color: #ce9178;">'#app'</span>)</code></pre>
            </div>

            <!-- 步驟 3 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 3. 建立 store（stores/counter.js）
              </h3>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">defineStore</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'pinia'</span>

<span style="color: #569cd6;">export</span> <span style="color: #569cd6;">const</span> <span style="color: #dcdcaa;">useCounterStore</span> = <span style="color: #dcdcaa;">defineStore</span>(<span style="color: #ce9178;">'counter'</span>, {
  <span style="color: #9cdcfe;">state</span>: () => ({ <span style="color: #9cdcfe;">count</span>: <span style="color: #b5cea8;">0</span> }),
  <span style="color: #9cdcfe;">actions</span>: {
    <span style="color: #dcdcaa;">increment</span>() {
      <span style="color: #569cd6;">this</span>.<span style="color: #9cdcfe;">count</span>++
    }
  }
})</code></pre>
            </div>

            <!-- 步驟 4 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 4. 在 Home.vue 使用
              </h3>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #6a9955; font-style: italic;">&lt;!-- HTML 區塊  (畫面呈現的內容)--&gt;</span>
<span style="color: #569cd6;">&lt;template&gt;</span>
  <span style="color: #569cd6;">&lt;div&gt;</span>
    <span style="color: #569cd6;">&lt;h2&gt;</span>首頁<span style="color: #569cd6;">&lt;/h2&gt;</span>
    <span style="color: #569cd6;">&lt;p&gt;</span>數字：{{ <span style="color: #9cdcfe;">counter</span>.<span style="color: #9cdcfe;">count</span> }}<span style="color: #569cd6;">&lt;/p&gt;</span>
    <span style="color: #569cd6;">&lt;button</span> <span style="color: #9cdcfe;">@click</span>=<span style="color: #ce9178;">"counter.increment"</span><span style="color: #569cd6;">&gt;</span>+1<span style="color: #569cd6;">&lt;/button&gt;</span>
  <span style="color: #569cd6;">&lt;/div&gt;</span>
<span style="color: #569cd6;">&lt;/template&gt;</span>

<span style="color: #6a9955; font-style: italic;">&lt;!-- JavaScript 區塊  (內容中的動作設定)--&gt;</span>
<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">useCounterStore</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'../stores/counter'</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">counter</span> = <span style="color: #dcdcaa;">useCounterStore</span>()
<span style="color: #569cd6;">&lt;/script&gt;</span></code></pre>
            </div>

            <!-- 步驟 5 -->
            <div>
              <h3 class="text-lg font-bold text-[#4b814b] mb-2">
                ✅ 5. 在 About.vue 使用
              </h3>
              <pre
                v-pre
                class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
              ><code><span style="color: #6a9955; font-style: italic;">&lt;!-- HTML 區塊  (畫面呈現的內容)--&gt;</span>
<span style="color: #569cd6;">&lt;template&gt;</span>
  <span style="color: #569cd6;">&lt;div&gt;</span>
    <span style="color: #569cd6;">&lt;h2&gt;</span>關於頁<span style="color: #569cd6;">&lt;/h2&gt;</span>
    <span style="color: #569cd6;">&lt;p&gt;</span>數字：{{ <span style="color: #9cdcfe;">counter</span>.<span style="color: #9cdcfe;">count</span> }}<span style="color: #569cd6;">&lt;/p&gt;</span>
  <span style="color: #569cd6;">&lt;/div&gt;</span>
<span style="color: #569cd6;">&lt;/template&gt;</span>

<span style="color: #6a9955; font-style: italic;">&lt;!-- JavaScript 區塊  (內容中的動作設定)--&gt;</span>
<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">useCounterStore</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'../stores/counter'</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">counter</span> = <span style="color: #dcdcaa;">useCounterStore</span>()
<span style="color: #569cd6;">&lt;/script&gt;</span></code></pre>
            </div>
          </div>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            ✅ 學完重點
          </h2>
          <p>
            -
            <strong>寶媽角度</strong
            >：全家共用一台冰箱，誰需要牛奶都能隨時拿，資料不會亂。<br /><br />
            - <strong>工程師角度</strong>：Pinia 幫你集中管理狀態，不用再
            props/emit 傳來傳去。
          </p>
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