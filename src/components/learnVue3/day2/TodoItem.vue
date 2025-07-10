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
  margin: 4px 0;
  background-color: rgb(190, 233, 193);
  padding: 4px;
  border-radius: 5px;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>