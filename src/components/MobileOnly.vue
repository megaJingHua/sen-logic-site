<template>
  <div>
    <div v-if="!isMobile" class="only-mobile">
      <div class="mobile-warning">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f8d7da"/><path d="M12 8v4m0 4h.01" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/></svg>
        <p>僅限手機瀏覽，請縮小視窗或用手機開啟</p>
      </div>
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMobile = ref(true)
function checkMobile() {
  isMobile.value = window.innerWidth <= 600
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.only-mobile {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8e8;
}
.mobile-warning {
  text-align: center;
  color: #b91c1c;
  font-size: 1.2em;
  background: #fff0f1;
  border-radius: 16px;
  padding: 40px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  border: 2px solid #fecaca;
  backdrop-filter: blur(10px);
}
.mobile-warning svg {
  margin-bottom: 12px;
}
</style> 