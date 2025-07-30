<template>
  <div class="max-w-md mx-auto py-6 text-center">
    <h2 class="text-xl font-bold mb-4">拼圖小遊戲 🧩</h2>

    <!-- 難度選擇 -->
    <div class="mb-4">
      <label class="font-semibold text-sm mr-2">選擇難度：</label>
      <select v-model="selectedSize" @change="generateTiles" class="border px-2 py-1 rounded">
        <option value="2x2">2x2</option>
        <option value="2x3">2x3</option>
        <option value="3x3">3x3</option>
        <option value="3x4">3x4</option>
      </select>
    </div>

    <!-- 拼圖區塊 -->
    <div
      class="mx-auto border"
      :style="{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        width: boxSize + 'px',
        height: boxSize * rows / cols + 'px',
        gap: '2px'
      }"
    >
      <div
        v-for="(tile, index) in tiles"
        :key="tile.id"
        class="w-full h-full cursor-pointer border border-white"
        @click="handleClick(index)"
        :style="{
          backgroundImage: `url(${image})`,
          backgroundSize: `${boxSize}px ${boxSize * rows / cols}px`,
          backgroundPosition: tile.bgPos,
        }"
      ></div>
    </div>

    <div class="mt-4">
      <p v-if="isComplete" class="text-green-600 font-bold">🎉 拼圖完成！</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const image = '/puzzle.png' // 放你的圖片（尺寸建議為 300x300）

const selectedSize = ref('3x3')
const tiles = ref([])
const selected = ref([])
const isComplete = ref(false)
const boxSize = 300 // px
const audio = new Audio('/error_hint.mp3') // 放 public 資料夾

const rows = computed(() => parseInt(selectedSize.value.split('x')[1]))
const cols = computed(() => parseInt(selectedSize.value.split('x')[0]))

function generateTiles() {
  const total = rows.value * cols.value
  const temp = []
  for (let i = 0; i < total; i++) {
    const x = i % cols.value
    const y = Math.floor(i / cols.value)
    const w = boxSize / cols.value
    const h = (boxSize / cols.value) // 保持寬高比例
    temp.push({
      id: i,
      bgPos: `-${x * w}px -${y * h}px`
    })
  }
  tiles.value = [...temp].sort(() => Math.random() - 0.5)
  isComplete.value = false
  selected.value = []
}

function handleClick(index) {
  if (selected.value.length === 0) {
    selected.value.push(index)
  } else {
    const i1 = selected.value[0]
    const i2 = index

    if (i1 === i2) {
      selected.value = []
      return
    }

    // 交換
    const temp = tiles.value[i1]
    tiles.value[i1] = tiles.value[i2]
    tiles.value[i2] = temp

    selected.value = []

    // 播放提示音（錯誤才播）
    const isWrong = !tiles.value.every((t, i) => t.id === i)
    if (isWrong) audio.play()
  }
}

watch(tiles, () => {
  isComplete.value = tiles.value.every((tile, i) => tile.id === i)
})

// 初始化
generateTiles()
</script>

<style scoped>
div[style*='background-image'] {
  background-repeat: no-repeat;
  background-color: #eee;
  transition: all 0.2s ease;
}
</style>