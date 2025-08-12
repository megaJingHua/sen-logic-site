<template>
  <li @click="handleDelete">{{ item }}</li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  item: String,
  index: Number,
});

const emit = defineEmits(["delete"]);

function handleDelete() {
  emit("delete", props.index);
}
</script>


<style scoped>
li {
  cursor: pointer;
  margin: 6px 0;
  background-color: rgb(190, 233, 193);
  padding: 8px 12px;
  border-radius: 8px;
  word-break: break-word;
  overflow-wrap: break-word;
  transition: all 0.2s ease;
  border: 1px solid rgba(163, 211, 161, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

li:hover {
  background-color: rgb(163, 211, 161);
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  border-color: rgba(163, 211, 161, 0.5);
}
</style>