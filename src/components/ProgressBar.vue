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
  height: 12px;
  background: #e0e8d8;
  border-radius: 8px;
  margin: 16px 0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.progress-bar-fg {
  height: 100%;
  background: linear-gradient(90deg, #a3d3a1 0%, #7bb274 100%);
  border-radius: 8px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>