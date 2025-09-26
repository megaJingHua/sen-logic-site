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

const currentDate = new Date();

// 判斷是否為 coming soon (目標日期之後為 true，之前為 false)
const isComingSoon = (dayId) => {
  const releaseDates = {
    1: new Date("2024-01-01"), // 已發布
    2: new Date("2024-01-02"), // 已發布
    3: new Date("2024-01-03"), // 已發布
    4: new Date("2024-01-04"), // 已發布
    5: new Date("2025-09-26"),
    6: new Date("2025-09-27"),
    7: new Date("2025-09-28"),
    8: new Date("2025-09-29"),
    9: new Date("2025-09-30"),
    10: new Date("2025-09-31"),
    11: new Date("2025-10-01"),
    12: new Date("2025-10-02"),
    13: new Date("2025-10-03"),
    14: new Date("2025-10-04"),
    15: new Date("2025-10-05"),
    16: new Date("2025-10-06"),
    17: new Date("2025-10-07"),
    18: new Date("2025-10-08"),
    19: new Date("2025-10-09"),
    20: new Date("2025-10-10"),
    21: new Date("2025-10-11"),
    22: new Date("2025-10-12"),
    23: new Date("2025-10-13"),
    24: new Date("2025-10-14"),
    25: new Date("2025-10-15"),
    26: new Date("2025-10-16"),
    27: new Date("2025-10-17"),
    28: new Date("2025-10-18"),
    29: new Date("2025-10-19"),
    30: new Date("2025-10-20"),
  };

  const releaseDate = releaseDates[dayId] || targetDate;
  return currentDate < releaseDate;
};

const days = ref([
  {
    id: 1,
    title: "Vue 3 是什麼?",
    detail:
      "你現在看到的網頁畫面，大多是用「前端框架」做出來的。Vue 3 就是其中一個超人氣框架，它就像「做互動網頁的積木工具箱」，讓工程師能快速拼出會動的網頁畫面。",
    router: "/day1",
    comming_soon: isComingSoon(1),
  },
  {
    id: 2,
    title: "組件是什麼？我為什麼要拆？",
    detail:
      "  你可以把網頁想像成一個樂高積木城堡。每個「積木」就是一個組件（component）比如：按鈕是一塊積木、輸入框是一塊積木、待辦清單的每一項也是一塊積木。今天帶你用最簡單的例子——「Todo List」來學會：✅組件拆分 ✅父子傳值 ✅用 props 傳資料，用emit 回報訊息！",
    router: "/day2",
    comming_soon: isComingSoon(2),
  },
  {
    id: 3,
    title: "computed 和 watch 怎麼幫你「看家」？",
    detail:
      "媽媽每天最怕什麼？就是「重複問問題、重複做事情」。電鍋要煮飯 → 看燈變沒？小孩洗完澡 → 地上濕沒？這些「重複檢查」、「自動反應」的事，Vue 也有喔！今天要認識兩個 Vue 的小幫手：computed, watch!",
    router: "/day3",
    comming_soon: isComingSoon(3),
  },
  {
    id: 4,
    title: "從單一房間到多房間—Vue Router",
    detail:
      "你可以把「網站」想成一間房子，房子的大門就是你的首頁 (Home)，房間就像每個不同的功能頁面， 而走廊就是 Router（路由），它負責帶你從大門走到不同的房間。",
    router: "/day4",
    comming_soon: isComingSoon(4),
  },
  {
    id: 5,
    title: "網站的公共冰箱 —— Pinia 狀態管理",
    detail:
      "在 Vue 專案中，如果不同頁面或元件都需要同一份資料（像「登入使用者」、「購物車」、「計數器」），光靠 props 與 emit 傳來傳去會變得很複雜。這時候就需要「狀態管理工具」來集中管理。",
    router: "/day5",
    comming_soon: isComingSoon(5),
  },
  {
    id: 6,
    title: "表單驗證 —— v-model 與必填檢查",
    detail:
      "表單是網站和使用者互動最常見的方式（登入、註冊、購物下單）。在 Vue3 裡，我們可以用 v-model 來綁定輸入框，讓資料與畫面保持同步，再加上驗證條件，避免使用者輸入錯誤或漏填。就像你去餐廳點餐，如果沒有勾選主餐或飲料，服務生會提醒你「這個還沒填哦！」",
    router: "/day6",
    comming_soon: isComingSoon(6),
  },
  {
    id: 7,
    title: "生命週期鉤子 —— 元件的開店流程",
    detail:
      "在 Vue3 中，每個元件都有「生命週期」，也就是它從出生 → 使用 → 消失的過程。就像一間早餐店，會經歷 備料、開店、更新菜單、打* 的流程。",
    router: "/day7",
    comming_soon: isComingSoon(7),
  },
  {
    id: 8,
    title: "provide / inject —— 跨層的紅包傳遞",
    detail: "在 Vue 專案裡，元件之間最常見的傳值方式是 props（父傳子）。但如果資料要從「爺爺 → 孫子」跨過好幾層，props 就會變得冗長。Vue 提供 provide / inject，讓「祖先元件」直接把資料提供給「後代元件」，中間的父母不用再幫忙轉交。",
    router: "/day8",
    comming_soon: isComingSoon(8),
  },
  {
    id: 9,
    title: "slot 插槽 —— 元件的萬用櫥櫃",
    detail: "在 Vue 中，slot 插槽允許父元件把「內容」塞進子元件的指定位置。 這讓元件可以更彈性、更多樣化，不只是固定樣式。",
    router: "/day9",
    comming_soon: isComingSoon(9),
  },
  {
    id: 10,
    title: "Teleport —— 元件的瞬間移動",
    detail: "在 Vue 中，元件通常會渲染在它被呼叫的地方。但有些情境下，我們希望「元素出現在另一個地方」，例如 Modal 彈窗、Toast 提示。Teleport 可以把元件的內容「瞬間移動」到指定的 DOM 節點（通常是 `body`）。",
    router: "/day10",
    comming_soon: isComingSoon(10),
  },
  {
    id: 11,
    title: "Transition —— 元件的華麗走秀",
    detail: "在 Vue 中，當元素進入或離開畫面時，可以加上 過場動畫。這讓使用者感覺畫面更流暢、自然。",
    router: "/day11",
    comming_soon: isComingSoon(11),
  },
  {
    id: 12,
    title: "Composition API 重構 —— 收納箱整理",
    detail: "Vue3 提供 Composition API，讓我們能把資料、方法、監聽集中在一起，方便拆分與重用。",
    router: "/day12",
    comming_soon: isComingSoon(12),
  },
  {
    id: 13,
    title: "自訂 Hook —— 媽媽的獨門秘方",
    detail: "有些功能經常會重複使用，可以抽成「自訂 Hook 函式」，就像家傳食譜，隨時套用。",
    router: "/day13",
    comming_soon: isComingSoon(13),
  },
  {
    id: 14,
    title: "Ref vs Reactive —— 存錢筒與全家帳本",
    detail: "Vue3 有兩種響應式 API：`ref` 與 `reactive`。它們都能讓資料變動時，自動更新畫面。",
    router: "/day14",
    comming_soon: isComingSoon(14),
  },
  {
    id: 15,
    title: "事件修飾符 —— 規則小貼紙",
    detail: "事件修飾符幫我們「控制事件的行為」，就像在門口貼規則標語。",
    router: "/day15",
    comming_soon: isComingSoon(15),
  },
  {
    id: 16,
    title: "v-if / v-show —— 燈泡 vs 窗簾",
    detail: "Vue 中常見的條件渲染方式：`v-if` 與 `v-show`。雖然都能顯示/隱藏元素，但背後運作不同。",
    router: "/day16",
    comming_soon: isComingSoon(16),
  },
  {
    id: 17,
    title: "v-for —— 批量烤餅乾",
    detail: "v-for 可以用來批次渲染列表，不用重複寫相同元素。",
    router: "/day17",
    comming_soon: isComingSoon(17),
  },
  {
    id: 18,
    title: "表單修飾符 —— 自動修正小幫手",
    detail: "Vue 的表單支援 修飾符，幫助處理輸入行為。",
    router: "/day18",
    comming_soon: isComingSoon(18),
  },
  {
    id: 19,
    title: "Pinia 資料持久化 —— 冰箱的備用電池",
    detail: "Pinia 預設的資料存在記憶體中，重新整理頁面就會消失。為了讓資料「記得住」，我們可以把它存在 localStorage / sessionStorage，這就是資料持久化。",
    router: "/day19",
    comming_soon: isComingSoon(19),
  },
  {
    id: 20,
    title: "Router 巢狀路由 —— 房子裡的房間",
    detail: "除了基本路由，Vue Router 還支援 巢狀路由，讓一個頁面裡可以再切換不同子頁面。常見應用：使用者中心（/user → 個人資料 / 訂單 / 收藏）。",
    router: "/day20",
    comming_soon: isComingSoon(20),
  },
  {
    id: 21,
    title: "Router 守衛 —— 門口的保全",
    detail: "有些頁面不是人人都能進入，例如「會員專區」需要先登入。Vue Router 提供 導航守衛（Navigation Guards），讓我們能在進入頁面前做檢查。",
    router: "/day21",
    comming_soon: isComingSoon(21),
  },
  {
    id: 22,
    title: "非同步資料 fetch —— 叫外送",
    detail: "很多資料來自後端，需要「非同步請求 (fetch / axios)」。Vue 可以在 `onMounted` 時發送請求，並用響應式資料更新畫面。",
    router: "/day22",
    comming_soon: isComingSoon(22),
  },
  {
    id: 23,
    title: "Loading 狀態 —— 廚房準備中",
    detail: "在等待資料時，需要一個「Loading 狀態」告訴使用者「資料載入中」。",
    router: "/day23",
    comming_soon: isComingSoon(23),
  },
  {
    id: 24,
    title: "錯誤處理 —— 缺貨的餐點",
    detail: "非同步請求不一定都成功，可能會出錯，需要妥善處理錯誤。",
    router: "/day24",
    comming_soon: isComingSoon(24),
  },
  {
    id: 25,
    title: "環境變數 —— 家裡的小抄",
    detail: "不同環境（開發、測試、正式）可能需要不同的 API 網址或設定。Vue 支援 `.env` 檔管理環境變數。",
    router: "/day25",
    comming_soon: isComingSoon(25),
  },
  {
    id: 26,
    title: "專案架構整理 —— 大掃除",
    detail: "專案越大，檔案越多，需要良好的架構來維護。",
    router: "/day26",
    comming_soon: isComingSoon(26),
  },
  {
    id: 27,
    title: "Pinia 插件 —— 智慧冰箱",
    detail: "Pinia 支援 插件 (plugin)，可以擴展 store 的功能，例如：存到 localStorage。",
    router: "/day27",
    comming_soon: isComingSoon(27),
  },
  {
    id: 28,
    title: "測試（unit test）—— 模擬考",
    detail: "在正式上線前，必須確保功能正確。單元測試就像「模擬考」，幫助驗證每個功能。",
    router: "/day28",
    comming_soon: isComingSoon(28),
  },
  {
    id: 29,
    title: "部署網站 —— 喬遷新居",
    detail: "專案開發完成後，需要「部署」到伺服器，讓別人可以透過網址訪問。",
    router: "/day29",
    comming_soon: isComingSoon(29),
  },
  {
    id: 30,
    title: "專案總結 & 展示 —— 成果發表會",
    detail: "30 天學習結束，將所有練習整合成一個小專案，並展示成果。",
    router: "/day30",
    comming_soon: isComingSoon(30),
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
  background: #f8f8e8 url("@/assets/mom-share.png") center center no-repeat;
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