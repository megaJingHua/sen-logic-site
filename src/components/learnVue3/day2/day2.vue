<template>
  <div class="todo">
    <h3>Day 2 組件拆分與父子傳值 (實作: Todo List)</h3>
    <p>
      ✅ 可輸入待辦事項<br />
      ✅ 按下按鈕新增到列表<br />
      ✅ 使用子組件顯示每一個 Todo 項目<br />
      ✅ 點擊項目可刪除
    </p>
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
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "@/components/learnVue3/day2/TodoItem.vue";

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
</style>