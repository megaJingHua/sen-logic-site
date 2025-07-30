<template>
  <div class="day-card">
    <div class="day-header" @click="toggle">
      <span class="day-number">Day{{ day.id }}</span>
      <span class="day-title">{{ day.title }}</span>
      <span class="arrow">{{ expanded ? "▲" : "▼" }}</span>
    </div>
    <transition name="fade">
      <div v-if="expanded" class="day-detail-wrap">
        <div class="day-detail">{{ day.detail }}</div>
        <RouterLink
          v-if="!day.comming_soon"
          :to="'/learn-vue3/day' + day.id"
        >
          <button class="complete-btn">進入 Day {{ day.id }} 學習</button>
        </RouterLink>

        <button v-else class="complete-btn disabled">Coming Soon...</button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  day: Object,
  completed: Boolean,
});
const expanded = ref(props.day.id === 1); // 預設第1天展開
function toggle() {
  expanded.value = !expanded.value;
}
</script>

<style>
.day-card {
  border: 2px solid #a3d3a1;
  border-radius: 18px;
  margin: 16px 0;
  padding: 0;
  background: rgba(248, 248, 232, 0.95);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.day-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.day-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2em;
  font-weight: bold;
  padding: 16px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
}

.day-header:hover {
  background-color: rgba(163, 211, 161, 0.1);
}
.day-number {
  background: #2f5133;
  color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  padding: 4px 12px;
}
.bunny-img {
  margin-left: auto;
  height: 48px;
}
.arrow {
  margin-left: auto;
  font-size: 1.2em;
  color: #a3d3a1;
}
.day-detail-wrap {
  padding: 0 16px 16px 16px;
}
.day-detail {
  margin-top: 8px;
  margin-bottom: 16px;
  color: #3a5a40;
  font-size: 1em;
}
.complete-btn,
.completed-label {
  background: #7bb274;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.complete-btn:hover {
  background: #6ba064;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.completed-label {
  background: #e0e8d8;
  color: #a3d3a1;
  cursor: default;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.complete-btn:disabled,
.complete-btn.disabled {
  background-color: #9ca3af; /* 灰階顏色 */
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.9;
}
.complete-btn:disabled:hover,
.complete-btn.disabled:hover {
  background-color: #9ca3af; /* 灰階 */
}
</style>