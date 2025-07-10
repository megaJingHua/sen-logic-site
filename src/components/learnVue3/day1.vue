<!-- HTML 區塊 -->
<template>
  <div>
    <h3>{{ message }}</h3>
    <p v-pre>
      ✅ 顯示綁定文字 {{ message }}<br />
      ✅ 製作按鈕點擊後數字+1<br />
    </p>
    <button @click="count++">點我：{{ count }}</button>
  </div>
</template>

<!-- JavaScript 區塊 -->
<script setup>
import { ref } from "vue";

const message = ref(
  "Day1 Vue 3 是什麼?(實作 .vue 基本組件)"
);
const count = ref(0);
</script>

<!-- CSS 區塊 -->
<style scoped>
h3 {
  color: #42b983;
}
</style>