<template>
  <section class="news px-4 py-8 text-[#2f5133] max-w-md mx-auto">
    <div class="news-area">
      <!-- 文章標題 -->
      <h2>啟程篇 | 幼兒邏輯怎麼培養？從生活中的小事開始！</h2>
      <p class="mb-2">
        對3～6歲的孩子來說，邏輯不是數學式的推理，而是：<strong
          >「知道事情為什麼這樣發生、接下來會發生什麼。」</strong
        >
      </p>
      <p class="text-sm">
        孩子若能理解「前因後果」與「順序流程」，就會開始建立<strong>因果推論能力、問題解決力</strong>，這就是邏輯思維的基礎。
      </p>
    </div>
    <div class="news-area">
      <!-- 第二小節：拼圖表格 -->
      <div class="text-left mb-6">
        <h2 class="text-xl font-semibold flex items-center mb-2">
          🧩 日常生活就是最好的邏輯教室！
        </h2>
        <p class="mb-4 text-sm">
          以「早上起床」為例，把日常流程切成一塊塊「邏輯拼圖」：
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead class="bg-green-100">
              <tr>
                <th class="p-2 border">拼圖動作</th>
                <th class="p-2 border">原因</th>
                <th class="p-2 border">結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">睜開眼睛</td>
                <td class="p-2 border">天亮了</td>
                <td class="p-2 border">該起床了</td>
              </tr>
              <tr class="bg-green-50">
                <td class="p-2 border">上廁所</td>
                <td class="p-2 border">肚子不舒服</td>
                <td class="p-2 border">身體比較舒服</td>
              </tr>
              <tr>
                <td class="p-2 border">刷牙洗臉</td>
                <td class="p-2 border">保持乾淨</td>
                <td class="p-2 border">準備開始新的一天</td>
              </tr>
              <tr class="bg-green-50">
                <td class="p-2 border">換衣服</td>
                <td class="p-2 border">穿睡衣不能出門</td>
                <td class="p-2 border">換成外出服</td>
              </tr>
              <tr>
                <td class="p-2 border">吃早餐</td>
                <td class="p-2 border">身體要有能量</td>
                <td class="p-2 border">有力氣去幼兒園探險</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-2 text-sm">
          👉
          <strong>當孩子每天反覆執行這個流程，他就會內建一個邏輯模型：</strong
          ><br />
          「完成前面的步驟，就能完成今天的任務！」
        </p>
      </div>

      <!-- 第三小節：宅媽分享 -->
      <div class="text-left mb-6">
        <h2 class="text-xl font-semibold flex items-center mb-2">
          💡 宅媽分享 | 工程師的思維＝幼兒的生活流程
        </h2>
        <p class="mb-2 text-sm">
          孩子建立「流程 → 結果」的邏輯觀念，這跟寫程式非常像：
        </p>
        <pre class="bg-green-50 p-3 rounded text-xs overflow-x-auto font-mono">
if (起床) {
  上廁所;
  刷牙洗臉;
  換衣服;
  吃早餐;
}
      </pre
        >
        <p class="mt-2 text-sm">
          每一個步驟，都是任務的「前提」，也是邏輯思考的一部分。
        </p>
      </div>

      <!-- 第四小節：怎麼玩 -->
      <div class="text-left mb-6">
        <h2 class="text-xl font-semibold mb-2">🐾 森森邏輯怎麼玩？</h2>
        <ul class="list-decimal list-inside text-sm space-y-1">
          <li>拆解任務流程，收集起床後需要用到的東西</li>
          <li>拼接流程，理解起床後需要做的事情</li>
          <li>完成邏輯小挑戰</li>
        </ul>
        <p class="mt-2 text-sm">
          例如：「幫森寶安排出門的順序」、「誰先誰後才不會忘記東西」等情境，讓孩子在遊戲中學邏輯。
        </p>
      </div>

      <!-- 小提醒 -->
      <div class="text-left mb-6">
        <h2 class="text-xl font-semibold mb-2">📌 小提醒給家長</h2>
        <ul class="list-disc list-inside text-sm space-y-1">
          <li>多問孩子：「你為什麼這樣做？」幫助他們表達自己的想法。</li>
          <li>引導孩子「講出流程」：例如「你覺得換完衣服後要做什麼？」</li>
          <li>不用強調「對錯」，而是協助他們思考「為什麼會這樣」。</li>
        </ul>
      </div>

      <!-- 開始任務按鈕 -->
      <div class="text-center">
        <RouterLink to="/explore" class="btn disabled">
          <PuzzlePieceIcon
            class="h-5 w-5 mr-2 inline-block"
          />任務開始 GO!</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
// no special logic here—just a presentational component
</script>

<style scoped>
.news-area {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.212);
  margin: 8px;
  border-radius: 8px;
  text-align: justify;
}
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

.btn:disabled,
.btn.disabled {
  background-color: #9ca3af; /* 灰階顏色 */
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.9;
}
.btn:disabled:hover,
.btn.disabled:hover {
  background-color: #9ca3af; /* 灰階 */
}
</style>