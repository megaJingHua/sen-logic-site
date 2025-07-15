<template>
  <div class="progress-bar-bg">
    <div class="progress-bar-fg" :style="{ width: (progress * 100) + '%' }"></div>
  </div>
</template>

<script setup>
defineProps({
  progress: Number
})
</script>

<style>
.progress-bar-bg {
  width: 100%;
  height: 10px;
  background: #e0e8d8;
  border-radius: 8px;
  margin: 16px 0;
}
.progress-bar-fg {
  height: 100%;
  background: #a3d3a1;
  border-radius: 8px;
  transition: width 0.3s;
}
</style>