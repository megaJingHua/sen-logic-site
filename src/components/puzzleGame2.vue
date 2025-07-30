<template>
  <div class="max-w-md mx-auto py-6 text-center">
    <h2 class="text-xl font-bold mb-4">拼圖小遊戲 🧩</h2>

    <!-- 難度切換 -->
    <div class="mb-4">
      <label class="font-semibold text-sm mr-2">選擇難度：</label>
      <select v-model="selectedSize" @change="initGame" class="border px-2 py-1 rounded">
        <option value="2x2">2x2</option>
        <option value="2x3">2x3</option>
        <option value="3x3">3x3</option>
        <option value="3x4">3x4</option>
      </select>
    </div>

    <!-- 上方：拚圖目標區 -->
    <div
      class="relative mx-auto mb-6 grid gap-1 border"
      :style="{
        width: boxSize + 'px',
        height: (boxSize * rows / cols) + 'px',
        gridTemplateColumns: `repeat(${cols}, 1fr)`
      }"
    >
      <div
        v-for="(tile, index) in placedTiles"
        :key="index"
        class="w-full h-full border relative bg-gray-100"
        @click="placeTileAt(index)"
      >
        <div
          v-if="tile"
          :style="{
            backgroundImage: `url(${image})`,
            backgroundSize: `${boxSize}px ${(boxSize * rows / cols)}px`,
            backgroundPosition: tile.bgPos,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }"
        ></div>
      </div>

      <!-- 底圖 -->
      <img
        :src="image"
        class="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
        alt="底圖"
      />
    </div>

    <!-- 下方：可選拼圖區 -->
    <div
      class="mx-auto grid gap-1 border"
      :style="{
        width: boxSize + 'px',
        gridTemplateColumns: `repeat(${cols}, 1fr)`
      }"
    >
      <div
        v-for="(tile, index) in availableTiles"
        :key="tile.id"
        class="w-full h-[calc(100px)] cursor-pointer border"
        @click="selectTile(tile, index)"
        :class="{ 'ring-2 ring-green-500': selectedTileIndex === index }"
        :style="{
          backgroundImage: `url(${image})`,
          backgroundSize: `${boxSize}px ${(boxSize * rows / cols)}px`,
          backgroundPosition: tile.bgPos,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#eee'
        }"
      ></div>
    </div>

    <div class="mt-4">
      <p v-if="isComplete" class="text-green-600 font-bold">🎉 拼圖完成！</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const image = '/puzzle.png'
const boxSize = 300
const selectedSize = ref('3x3')
const availableTiles = ref([])
const placedTiles = ref([])
const selectedTile = ref(null)
const selectedTileIndex = ref(null)
const isComplete = ref(false)

const cols = computed(() => parseInt(selectedSize.value.split('x')[0]))
const rows = computed(() => parseInt(selectedSize.value.split('x')[1]))

function initGame() {
  const total = rows.value * cols.value
  const temp = []
  for (let i = 0; i < total; i++) {
    const x = i % cols.value
    const y = Math.floor(i / cols.value)
    const w = boxSize / cols.value
    const h = (boxSize * rows.value / cols.value) / rows.value
    temp.push({
      id: i,
      bgPos: `-${x * w}px -${y * h}px`,
      position: i
    })
  }
  availableTiles.value = [...temp].sort(() => Math.random() - 0.5)
  placedTiles.value = Array(total).fill(null)
  selectedTile.value = null
  selectedTileIndex.value = null
  isComplete.value = false
}

function selectTile(tile, index) {
  selectedTile.value = tile
  selectedTileIndex.value = index
}

function placeTileAt(positionIndex) {
  if (!selectedTile.value) return
  if (placedTiles.value[positionIndex] !== null) return
  placedTiles.value[positionIndex] = selectedTile.value
  availableTiles.value.splice(selectedTileIndex.value, 1)
  selectedTile.value = null
  selectedTileIndex.value = null
  checkComplete()
}

function checkComplete() {
  isComplete.value = placedTiles.value.every((tile, i) => tile && tile.position === i)
}

initGame()
</script>

<style scoped>
img {
  pointer-events: none;
}
</style>