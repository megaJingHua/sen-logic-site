<template>
  <li>
    <input type="checkbox" v-model="localDone" @change="toggleDone" />
    <span :style="{ textDecoration: localDone ? 'line-through' : 'none' }">
      {{ item.text }}
    </span>
    <button @click="$emit('remove', props.index)">❌</button>
  </li>
</template>

<script setup>
import { ref, watch } from "vue";
// 接收父母交代的 props 與 emit
const props = defineProps(["item", "index"]);
const emit = defineEmits(["update", "remove"]);


const localDone = ref(props.item.done);

// 看著 props 的 done，有變就同步更新 localDone
watch(
  () => props.item.done,
  (newVal) => {
    localDone.value = newVal;
  }
);

// 使用者打勾時，告訴父母「我變好了」
function toggleDone() {
  emit("update", { ...props.item, done: localDone.value });
}
</script>