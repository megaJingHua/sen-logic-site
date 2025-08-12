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
            Day3 computed 和 watch 怎麼幫你「看家」？
          </h2>
        </div>
        <div class="day-content mb-4 text-[#3a5a40]">
          媽媽每天最怕什麼？就是「重複問問題、重複做事情」。電鍋要煮飯 →
          看燈變沒？小孩洗完澡 →
          地上濕沒？這些「重複檢查」、「自動反應」的事，Vue
          也有喔！今天要認識兩個 Vue 的小幫手：computed 和 watch<br />
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            🧠 computed vs watch 怎麼選？
          </h2>

          <ul>
            <li>
              <strong>computed →</strong>
              幫你<strong>自動算好東西</strong>（像幫你統計今天幾件事完成），適合用來"顯示給使用者看的值"。<br />✅
              有快取：依賴的資料沒變就不重算<br /><br />
            </li>
            <li>
              <strong>watch →</strong>
              幫你<strong>偷偷盯著資料，一變就提醒你</strong>（像你看到天黑了會記得收衣服），常用在執行動作、更新資料、debug。<br />❌
              沒有快取，每次變都執行
            </li>
          </ul>
          <p></p>
          <h2 class="text-xl font-bold text-[#4b814b] mt-6 mb-2">
            📦今天的實作是什麼?
          </h2>
          <p>
            再來一次 Todo
            List，新增功能讓每件代辦事項都可以打勾✔️，完成後畫線～<br />
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
                  v-for="todo in filteredTodos"
                  :key="todo.text"
                  :item="todo"
                  :index="getTodoIndex(todo)"
                  @update="updateTodo"
                  @remove="removeTodo"
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
        <span style="color: #9cdcfe;">v-for</span>=<span style="color: #ce9178;">"todo in filteredTodos"</span>
        <span style="color: #9cdcfe;">:key</span>=<span style="color: #ce9178;">"todo.text"</span>
        <span style="color: #9cdcfe;">:item</span>=<span style="color: #ce9178;">"todo"</span>
        <span style="color: #9cdcfe;">:index</span>=<span style="color: #ce9178;">"getTodoIndex(todo)"</span>
        <span style="color: #9cdcfe;">@update</span>=<span style="color: #ce9178;">"updateTodo"</span>
        <span style="color: #9cdcfe;">@remove</span>=<span style="color: #ce9178;">"removeTodo"</span>
      <span style="color: #569cd6;">/&gt;</span>
    <span style="color: #569cd6;">&lt;/ul&gt;</span>
  <span style="color: #569cd6;">&lt;/div&gt;</span>
<span style="color: #569cd6;">&lt;/template&gt;</span>

<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #6a9955; font-style: italic;">// 新增任務的輸入框</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">newTodo</span> = <span style="color: #dcdcaa;">ref</span>(<span style="color: #ce9178;">""</span>)<span style="color: #569cd6;">;</span>

<span style="color: #6a9955; font-style: italic;">// 代辦事項清單</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">todos</span> = <span style="color: #dcdcaa;">ref</span>([
  { <span style="color: #9cdcfe;">text</span>: <span style="color: #ce9178;">"買牛奶"</span>, <span style="color: #9cdcfe;">done</span>: <span style="color: #dcdcaa;">false</span> },
  { <span style="color: #9cdcfe;">text</span>: <span style="color: #ce9178;">"寫 Vue 3 筆記"</span>, <span style="color: #9cdcfe;">done</span>: <span style="color: #dcdcaa;">true</span> },
])<span style="color: #569cd6;">;</span>

<span style="color: #6a9955; font-style: italic;">// 加入新任務</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">addTodo</span>() {
  <span style="color: #569cd6;">if</span> (<span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">trim</span>() !== <span style="color: #ce9178;">""</span>) {
    <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">push</span>({ <span style="color: #9cdcfe;">text</span>: <span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">trim</span>(), <span style="color: #9cdcfe;">done</span>: <span style="color: #dcdcaa;">false</span> })<span style="color: #569cd6;">;</span>
    <span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">value</span> = <span style="color: #ce9178;">""</span><span style="color: #569cd6;">;</span>
  }
}

<span style="color: #6a9955; font-style: italic;">// 更新完成狀態</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">updateTodo</span>(<span style="color: #9cdcfe;">newTodo</span>) {
  <span style="color: #569cd6;">if</span> (!<span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span> || !<span style="color: #9cdcfe;">newTodo</span>) <span style="color: #569cd6;">return</span><span style="color: #569cd6;">;</span>
  <span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">index</span> = <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">findIndex</span>((<span style="color: #9cdcfe;">todo</span>) =&gt; <span style="color: #9cdcfe;">todo</span>.<span style="color: #9cdcfe;">text</span> === <span style="color: #9cdcfe;">newTodo</span>.<span style="color: #9cdcfe;">text</span>)<span style="color: #569cd6;">;</span>
  <span style="color: #569cd6;">if</span> (<span style="color: #9cdcfe;">index</span> !== -<span style="color: #b5cea8;">1</span>) {
    <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>[<span style="color: #9cdcfe;">index</span>] = <span style="color: #9cdcfe;">newTodo</span><span style="color: #569cd6;">;</span>
  }
}

<span style="color: #6a9955; font-style: italic;">// 移除任務</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">removeTodo</span>(<span style="color: #9cdcfe;">index</span>) {
  <span style="color: #569cd6;">if</span> (!<span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span> || <span style="color: #9cdcfe;">index</span> === -<span style="color: #b5cea8;">1</span> || <span style="color: #9cdcfe;">index</span> &gt;= <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #9cdcfe;">length</span>) <span style="color: #569cd6;">return</span><span style="color: #569cd6;">;</span>
  <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">splice</span>(<span style="color: #9cdcfe;">index</span>, <span style="color: #b5cea8;">1</span>)<span style="color: #569cd6;">;</span>
}

<span style="color: #6a9955; font-style: italic;">// ✅ 只顯示未完成的功能</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">showOnlyUnfinished</span> = <span style="color: #dcdcaa;">ref</span>(<span style="color: #dcdcaa;">false</span>)<span style="color: #569cd6;">;</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">filteredTodos</span> = <span style="color: #dcdcaa;">computed</span>(() =&gt; {
  <span style="color: #569cd6;">return</span> <span style="color: #9cdcfe;">showOnlyUnfinished</span>.<span style="color: #9cdcfe;">value</span>
    ? <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">filter</span>((<span style="color: #9cdcfe;">t</span>) =&gt; !<span style="color: #9cdcfe;">t</span>.<span style="color: #9cdcfe;">done</span>)
    : <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span><span style="color: #569cd6;">;</span>
})<span style="color: #569cd6;">;</span>

<span style="color: #6a9955; font-style: italic;">// 安全地獲取 todo 的索引</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">getTodoIndex</span>(<span style="color: #9cdcfe;">todo</span>) {
  <span style="color: #569cd6;">if</span> (!<span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>) <span style="color: #569cd6;">return</span> -<span style="color: #b5cea8;">1</span><span style="color: #569cd6;">;</span>
  <span style="color: #569cd6;">return</span> <span style="color: #9cdcfe;">todos</span>.<span style="color: #9cdcfe;">value</span>.<span style="color: #dcdcaa;">findIndex</span>((<span style="color: #9cdcfe;">t</span>) =&gt; <span style="color: #9cdcfe;">t</span>.<span style="color: #9cdcfe;">text</span> === <span style="color: #9cdcfe;">todo</span>.<span style="color: #9cdcfe;">text</span>)<span style="color: #569cd6;">;</span>
}
<span style="color: #569cd6;">&lt;/script&gt;</span></code>
            </pre>
          <strong>TodoItem.vue (子組件)</strong>
          <pre
            v-pre
            class="code-block bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm mb-4 text-white"
          ><code><span style="color: #569cd6;">&lt;template&gt;</span>
  <span style="color: #569cd6;">&lt;li</span><span style="color: #569cd6;">&gt;</span>
    <span style="color: #569cd6;">&lt;input</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"checkbox"</span> <span style="color: #9cdcfe;">v-model</span>=<span style="color: #ce9178;">"localDone"</span> <span style="color: #9cdcfe;">@change</span>=<span style="color: #ce9178;">"toggleDone"</span> <span style="color: #569cd6;">/&gt;</span>
    <span style="color: #569cd6;">&lt;span</span> <span style="color: #9cdcfe;">:style</span>=<span style="color: #ce9178;">"{ textDecoration: localDone ? 'line-through' : 'none' }"</span><span style="color: #569cd6;">&gt;</span>
      {{ <span style="color: #9cdcfe;">item</span>.<span style="color: #9cdcfe;">text</span> }}
    <span style="color: #569cd6;">&lt;/span</span><span style="color: #569cd6;">&gt;</span>
    <span style="color: #569cd6;">&lt;button</span> <span style="color: #9cdcfe;">@click</span>=<span style="color: #ce9178;">"$emit('remove', props.index)"</span><span style="color: #569cd6;">&gt;</span>❌<span style="color: #569cd6;">&lt;/button</span><span style="color: #569cd6;">&gt;</span>
  <span style="color: #569cd6;">&lt;/li</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">&lt;/template</span><span style="color: #569cd6;">&gt;</span>

<span style="color: #569cd6;">&lt;script</span> <span style="color: #9cdcfe;">setup</span><span style="color: #569cd6;">&gt;</span>
<span style="color: #569cd6;">import</span> { <span style="color: #dcdcaa;">ref</span>, <span style="color: #dcdcaa;">watch</span> } <span style="color: #569cd6;">from</span> <span style="color: #ce9178;">"vue"</span><span style="color: #569cd6;">;</span>
<span style="color: #6a9955; font-style: italic;">// 接收父母交代的 props 與 emit</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">props</span> = <span style="color: #dcdcaa;">defineProps</span>([<span style="color: #ce9178;">"item"</span>, <span style="color: #ce9178;">"index"</span>])<span style="color: #569cd6;">;</span>
<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">emit</span> = <span style="color: #dcdcaa;">defineEmits</span>([<span style="color: #ce9178;">"update"</span>, <span style="color: #ce9178;">"remove"</span>])<span style="color: #569cd6;">;</span>

<span style="color: #569cd6;">const</span> <span style="color: #9cdcfe;">localDone</span> = <span style="color: #dcdcaa;">ref</span>(<span style="color: #9cdcfe;">props</span>.<span style="color: #9cdcfe;">item</span>.<span style="color: #9cdcfe;">done</span>)<span style="color: #569cd6;">;</span>

<span style="color: #6a9955; font-style: italic;">// 看著 props 的 done，有變就同步更新 localDone</span>
<span style="color: #dcdcaa;">watch</span>(
  () <span style="color: #569cd6;">=&gt;</span> <span style="color: #9cdcfe;">props</span>.<span style="color: #9cdcfe;">item</span>.<span style="color: #9cdcfe;">done</span>,
  (<span style="color: #9cdcfe;">newVal</span>) <span style="color: #569cd6;">=&gt;</span> {
    <span style="color: #9cdcfe;">localDone</span>.<span style="color: #9cdcfe;">value</span> = <span style="color: #9cdcfe;">newVal</span><span style="color: #569cd6;">;</span>
  }
)<span style="color: #569cd6;">;</span>

<span style="color: #6a9955; font-style: italic;">// 使用者打勾時，告訴父母「我變好了」</span>
<span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">toggleDone</span>() {
  <span style="color: #dcdcaa;">emit</span>(<span style="color: #ce9178;">"update"</span>, { ...<span style="color: #9cdcfe;">props</span>.<span style="color: #9cdcfe;">item</span>, <span style="color: #9cdcfe;">done</span>: <span style="color: #9cdcfe;">localDone</span>.<span style="color: #9cdcfe;">value</span> })<span style="color: #569cd6;">;</span>
}
<span style="color: #569cd6;">&lt;/script</span><span style="color: #569cd6;">&gt;</span></code>
           </pre>
        </div>
      </div>
    </div>
  </MobileOnly>
</template>

<script setup>
import { ref, computed } from "vue";
import TodoItem from "./todoListItem.vue";

// 新增任務的輸入框
const newTodo = ref("");

// 代辦事項清單
const todos = ref([
  { text: "買牛奶", done: false },
  { text: "寫 Vue 3 筆記", done: true },
]);

// 加入新任務
function addTodo() {
  if (newTodo.value.trim() !== "") {
    todos.value.push({ text: newTodo.value.trim(), done: false });
    newTodo.value = "";
  }
}

// 更新完成狀態
function updateTodo(newTodo) {
  if (!todos.value || !newTodo) return;
  const index = todos.value.findIndex((todo) => todo.text === newTodo.text);
  if (index !== -1) {
    todos.value[index] = newTodo;
  }
}

// 移除任務
function removeTodo(index) {
  if (!todos.value || index === -1 || index >= todos.value.length) return;
  todos.value.splice(index, 1);
}

// ✅ 只顯示未完成的功能
const showOnlyUnfinished = ref(false);
const filteredTodos = computed(() => {
  return showOnlyUnfinished.value
    ? todos.value.filter((t) => !t.done)
    : todos.value;
});

// 安全地獲取 todo 的索引
function getTodoIndex(todo) {
  if (!todos.value) return -1;
  return todos.value.findIndex((t) => t.text === todo.text);
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