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
          <h2 class="text-2xl md:text-4xl font-bold">
            Day2 組件是什麼？我為什麼要拆？
          </h2>
        </div>
        <div class="day-content mb-4 text-[#3a5a40]">
          你可以把網頁想像成一個樂高積木城堡。
          每個「積木」就是一個組件（component）
          比如：按鈕是一塊積木、輸入框是一塊積木、待辦清單的每一項也是一塊積木。<br /><br />今天帶你用最簡單的例子
          ——「Todo List」來學會：✅組件拆分 ✅父子傳值 ✅用 props 傳資料，用
          emit 回報訊息！
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            🧸 為什麼要拆成小組件？
          </h2>
          <p>
            👉 好整理、好維修、好重複使用！<br />
            就像做便當，如果每一格都做好切分，放肉放菜放飯都井井有條～
            出錯也只要檢查那一格！
          </p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            📮 組件之間怎麼講話？（資料怎麼互傳？）
          </h2>
          <p>
            用一個「爸爸和小孩」的故事來比喻：<br />
            爸爸傳玩具給小孩，爸爸說：「來，這是你的玩具」(在 Vue 裡用props)<br />
            小孩舉手說想喝水，小孩：「媽媽，我口渴啦～」(在 Vue 裡用 emit)<br />
            <br />
            ✅<strong>父 → 子 用 props，子 → 父 用 emit</strong><br />
            這是組件化拆分時，最常用到的資料流動方式。
          </p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            工程師都不知道的冷知識
          </h2>
          <p>
            <strong
              >🧠 為什麼叫「父子組件（parent-child）」而不是「母子」？</strong
            >
            這其實是程式世界的<strong>習慣用語（convention）</strong>，源自於：<br /><br />
            1.
            <strong>早期的電腦科學（Computer Science）用詞</strong
            >大多是男性主導的領域，語言架構也偏陽性化，像「master/slave」、「father/son」、「man-in-the-middle」這類比喻普遍存在。
            <br /><br />2. 在程式語言中，「Parent-Child」結構常常代表： -
            <strong>Parent（父組件）</strong
            >：擁有整體架構與控制權，負責傳值、管理邏輯。 -
            <strong>Child（子組件）</strong>：接收資料、執行功能、向上回報。
            <br /><br />3. 英文的 "parent"
            其實是「雙親」的意思，但在中文語境中習慣直譯為「父」，所以久而久之就叫成「父子關係」。
          </p>

          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            📦今天的實作是什麼?
          </h2>
          <p>
            實作「Todo List」： <br />✅ 可輸入待辦事項 <br />✅
            按下按鈕新增到列表 <br />✅ 使用子組件顯示每一個 Todo 項目 <br />✅
            點擊項目可刪除
          </p>
          <b>小功能 Demo:</b> <br />
          <div
            class="demo-block bg-[#f8f8e8] rounded-lg p-4 overflow-x-auto text-sm mb-4"
          >
            <div class="todo">
              <input
                v-model="newTodo"
                placeholder="輸入待辦事項"
                @keyup.enter="addTodo"
              />
              <button @click="addTodo">新增</button>

              <ul>
                <TodoItem
                  v-for="(todo, index) in todos"
                  :key="index"
                  :item="todo"
                  :index="index"
                  @delete="deleteTodo"
                />
              </ul>
            </div>
          </div>
          <b>程式碼 Demo:</b> <br />
          需要兩個.vue 檔案，一個是父組件，一個是子組件。<br />
          <br />
                      <strong>Todo.vue (父組件)</strong>
            <pre
              v-pre
              class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
            ><code><span style="color: #569cd6;">&lt;template&gt;</span>
  <span style="color: #569cd6;">&lt;div</span> <span style="color: #9cdcfe;">class</span>=<span style="color: #ce9178;">"todo"</span><span style="color: #569cd6;">&gt;</span>
    <span style="color: #569cd6;">&lt;input</span>
      <span style="color: #9cdcfe;">v-model</span>=<span style="color: #ce9178;">"newTodo"</span>
      <span style="color: #9cdcfe;">placeholder</span>=<span style="color: #ce9178;">"輸入待辦事項"</span>
      <span style="color: #9cdcfe;">@keyup.enter</span>=<span style="color: #ce9178;">"addTodo"</span>
    <span style="color: #569cd6;">/&gt;</span>
    <span style="color: #569cd6;">&lt;button</span> <span style="color: #9cdcfe;">@click</span>=<span style="color: #ce9178;">"addTodo"</span><span style="color: #569cd6;">&gt;</span>新增<span style="color: #569cd6;">&lt;/button&gt;</span>

    <span style="color: #569cd6;">&lt;ul&gt;</span>
      <span style="color: #569cd6;">&lt;TodoItem</span>
        <span style="color: #9cdcfe;">v-for</span>=<span style="color: #ce9178;">"(todo, index) in todos"</span>
        <span style="color: #9cdcfe;">:key</span>=<span style="color: #ce9178;">"index"</span>
        <span style="color: #9cdcfe;">:item</span>=<span style="color: #ce9178;">"todo"</span>
        <span style="color: #9cdcfe;">:index</span>=<span style="color: #ce9178;">"index"</span>
        <span style="color: #9cdcfe;">@delete</span>=<span style="color: #ce9178;">"deleteTodo"</span>
      <span style="color: #569cd6;">/&gt;</span>
    <span style="color: #569cd6;">&lt;/ul&gt;</span>
  <span style="color: #569cd6;">&lt;/div&gt;</span>
<span style="color: #569cd6;">&lt;/template&gt;</span>

<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">ref</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">"vue"</span>;
<span style="color: #569cd6;">import</span> <span style="color: #4ec9b0;">TodoItem</span> <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">"@/components/learnVue3/day2/TodoItem.vue"</span>;
<span style="color: #6a9955; font-style: italic;">// 定義'newTodo' 為新增的項目</span>
<span style="color: #6a9955; font-style: italic;">// 定義 'todos' 為所有項目列表</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">newTodo</span> = <span style="color: #dcdcaa;">ref</span>(<span style="color: #ce9178;">""</span>);
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">todos</span> = <span style="color: #dcdcaa;">ref</span>([]);

<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">addTodo</span>() {
  <span style="color: #569cd6;">if</span> (<span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">trim</span>() !== <span style="color: #ce9178;">""</span>) {
    <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">push</span>(<span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">trim</span>());
    <span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">value</span> = <span style="color: #ce9178;">""</span>;
  }
}

<span style="color: #6a9955; font-style: italic;">// 由子組件 emit 觸發 @delete 事件</span>
<span style="color: #6a9955; font-style: italic;">// 再由 @delete 觸發 deleteTodo 事件並將 emit @delete 事件中的參數 index 帶入</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">deleteTodo</span>(<span style="color: #9cdcfe;">index</span>) {
  <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">splice</span>(<span style="color: #9cdcfe;">index</span>, <span style="color: #b5cea8;">1</span>);
  }
<span style="color: #569cd6;">&lt;/script&gt;</span>

<span style="color: #569cd6;">&lt;style</span> <span style="color: #9cdcfe;">scoped</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #d7ba7d;">.todo</span> {
  <span style="color: #9cdcfe;">max-width</span>: <span style="color: #b5cea8;">400</span><span style="color: #b5cea8;">px</span>;
  <span style="color: #9cdcfe;">margin</span>: <span style="color: #569cd6;">auto</span>;
  <span style="color: #9cdcfe;">padding</span>: <span style="color: #b5cea8;">16</span><span style="color: #b5cea8;">px</span>;
}
<span style="color: #d7ba7d;">input</span> {
  <span style="color: #9cdcfe;">padding</span>: <span style="color: #b5cea8;">8</span><span style="color: #b5cea8;">px</span>;
  <span style="color: #9cdcfe;">width</span>: <span style="color: #b5cea8;">70</span><span style="color: #b5cea8;">%</span>;
  <span style="color: #9cdcfe;">margin-right</span>: <span style="color: #b5cea8;">8</span><span style="color: #b5cea8;">px</span>;
}
<span style="color: #d7ba7d;">button</span> {
  <span style="color: #9cdcfe;">padding</span>: <span style="color: #b5cea8;">8</span><span style="color: #b5cea8;">px</span> <span style="color: #b5cea8;">12</span><span style="color: #b5cea8;">px</span>;
}
<span style="color: #d7ba7d;">ul</span> {
  <span style="color: #9cdcfe;">list-style-type</span>: <span style="color: #569cd6;">none</span>;
  <span style="color: #9cdcfe;">padding</span>: <span style="color: #b5cea8;">0</span>;
}
<span style="color: #d7ba7d;">h2</span> {
  <span style="color: #9cdcfe;">color</span>: <span style="color: #b5cea8;">#42b983</span>;
}
<span style="color: #569cd6;">&lt;/style&gt;</span></code>
            </pre>
                     <strong>TodoItem.vue (子組件)</strong>
           <pre
             v-pre
             class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
           ><code><span style="color: #569cd6;">&lt;template&gt;</span>
  <span style="color: #569cd6;">&lt;li</span> <span style="color: #9cdcfe;">@click</span>=<span style="color: #ce9178;">"handleDelete"</span><span style="color: #569cd6;">&gt;</span>{{ <span style="color: #9cdcfe;">item</span> }}<span style="color: #569cd6;">&lt;/li&gt;</span>
<span style="color: #569cd6;">&lt;/template&gt;</span>

<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">defineProps</span>, <span style="color: #dcdcaa;">defineEmits</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">'vue'</span>
<span style="color: #6a9955; font-style: italic;">// 定義從父組件接收到的參數</span>
<span style="color: #6a9955; font-style: italic;">//'item'為代辦事項; 'index'為第 {{index}} 個代辦事項</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">props</span> = <span style="color: #dcdcaa;">defineProps</span>({
  <span style="color: #9cdcfe;">item</span>: <span style="color: #4ec9b0;">String</span>,
  <span style="color: #9cdcfe;">index</span>: <span style="color: #4ec9b0;">Number</span>,
})

<span style="color: #6a9955; font-style: italic;">// 將傳出的事件定義名稱為'delete'</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">emit</span> = <span style="color: #dcdcaa;">defineEmits</span>([<span style="color: #ce9178;">'delete'</span>])
<span style="color: #6a9955; font-style: italic;">// 並將參數 'index' 傳給父組件</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">handleDelete</span>() {
  <span style="color: #dcdcaa;">emit</span>(<span style="color: #ce9178;">'delete'</span>, <span style="color: #9cdcfe;">props</span>.<span style="color: #9cdcfe;">index</span>)
}
<span style="color: #569cd6;">&lt;/script&gt;</span>

<span style="color: #569cd6;">&lt;style</span> <span style="color: #9cdcfe;">scoped</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #d7ba7d;">li</span> {
  <span style="color: #9cdcfe;">cursor</span>: <span style="color: #569cd6;">pointer</span>;
  <span style="color: #9cdcfe;">margin</span>: <span style="color: #b5cea8;">4</span><span style="color: #b5cea8;">px</span> <span style="color: #b5cea8;">0</span>;
}
<span style="color: #d7ba7d;">li:hover</span> {
  <span style="color: #9cdcfe;">text-decoration</span>: <span style="color: #569cd6;">line-through</span>;
  <span style="color: #9cdcfe;">color</span>: <span style="color: #569cd6;">gray</span>;
}
<span style="color: #569cd6;">&lt;/style&gt;</span></code>
           </pre>
        </div>
      </div>
    </div>
  </MobileOnly>
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "@/components/learnVue3/day2/TodoItem.vue";
import MobileOnly from "@/components/MobileOnly.vue";

const newTodo = ref("");
const todos = ref([]);

function addTodo() {
  if (newTodo.value.trim() !== "") {
    todos.value.push(newTodo.value.trim());
    newTodo.value = "";
  }
}

function deleteTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<style scoped>
.todo {
  max-width: 400px;
  margin: auto;
}
input {
  padding: 8px;
  width: 70%;
  margin-right: 8px;
}
button {
  padding: 8px 12px;
}
ul {
  list-style-type: none;
  padding: 0;
}
h3 {
  color: #42b983;
}
h3,
h2 {
  color: #42b983;
  margin-top: 10px;
}

p {
  padding-left: 20px;
}

</style>