<template>
  <MobileOnly>
    <div class="puzzle-game-container">
      <div class="puzzle-game-wrapper">
        <!-- 標題區域 -->
        <div class="title-section">
          <div class="title-header">
            <RouterLink
              to="/"
              class="back-nav-button"
              aria-label="回到上一頁"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </RouterLink>
            <h1 class="game-title">拼圖🧩Puzzle</h1>
            <div class="title-spacer"></div>
          </div>
        </div>

        <!-- 步驟指示器 -->
        <div class="step-indicator">
          <div
            class="step-item"
            :class="{ active: currentStep >= 1, completed: currentStep > 1 }"
          >
            <div class="step-number">1</div>
          </div>
          <div class="step-line" :class="{ active: currentStep >= 2 }"></div>
          <div
            class="step-item"
            :class="{ active: currentStep >= 2, completed: currentStep > 2 }"
          >
            <div class="step-number">2</div>
          </div>
          <div class="step-line" :class="{ active: currentStep >= 3 }"></div>
          <div class="step-item" :class="{ active: currentStep >= 3 }">
            <div class="step-number">3</div>
          </div>
        </div>

        <!-- 第一步：難度選擇 -->
        <div v-if="currentStep === 1" class="step-content">
          <div class="step-panel">
            <div class="step-header">
              <h2 class="step-title">1 選擇難度</h2>
            </div>

            <div class="difficulty-grid">
              <div
                v-for="difficulty in difficulties"
                :key="difficulty.value"
                class="difficulty-card"
                :class="{ selected: selectedSize === difficulty.value }"
                @click="selectDifficulty(difficulty.value)"
              >
                <div class="difficulty-stars">
                  <span v-for="i in difficulty.stars" :key="i" class="star"
                    >⭐</span
                  >
                </div>
                <h3 class="difficulty-name">{{ difficulty.name }}</h3>
                <div class="difficulty-size">{{ difficulty.size }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二步：圖案選擇 -->
        <div v-if="currentStep === 2" class="step-content">
          <div class="step-panel">
            <div class="step-header">
              <h2 class="step-title">2 選擇圖案</h2>
            </div>

            <div class="image-grid">
              <div
                v-for="(image, index) in availableImages"
                :key="index"
                class="image-card"
                :class="{ selected: selectedImageIndex === index }"
                @click="selectImage(index)"
              >
                <img :src="image.src" :alt="image.name" class="image-preview" />
                <div class="image-name">{{ image.name }}</div>
              </div>
            </div>

            <div class="step-footer">
              <button @click="prevStep" class="back-button">← 返回</button>
            </div>
          </div>
        </div>

        <!-- 第三步：拼圖遊戲 -->
        <div v-if="currentStep === 3" class="step-content">
          <div class="step-panel">
            <!-- 進度指示器 -->
            <div class="progress-container">
              <span class="progress-label">進度</span>
              <div class="progress-bar-wrapper">
                <div class="progress-bar-bg">
                  <div
                    class="progress-bar-fill"
                    :style="{ width: `${progressPercentage}%` }"
                  >
                    <div class="progress-bar-shine"></div>
                  </div>
                </div>
              </div>
              <span class="progress-text"
                >{{ placedCount }}/{{ totalTiles }}</span
              >
            </div>

            <!-- 上方：拼圖目標區 -->
            <div class="target-section">
              <div
                class="target-grid"
                :style="{
                  width: boxSize + 'px',
                  height: (boxSize * rows) / cols + 'px',
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                }"
              >
                <div
                  v-for="(tile, index) in placedTiles"
                  :key="index"
                  class="target-cell"
                  :class="{
                    'target-cell-filled': tile,
                    'target-cell-empty': !tile,
                  }"
                  @click="placeTileAt(index)"
                  @dragover.prevent
                  @drop="dropTile(index)"
                >
                  <div
                    v-if="tile"
                    class="tile-image"
                    :style="{
                      backgroundImage: `url(${currentImage})`,
                      backgroundSize: `${boxSize}px ${
                        (boxSize * rows) / cols
                      }px`,
                      backgroundPosition: tile.bgPos,
                      backgroundRepeat: 'no-repeat',
                    }"
                  ></div>
                </div>

                <!-- 底圖 -->
                <img :src="currentImage" class="target-background" alt="底圖" />
              </div>
            </div>

            <!-- 下方：可選拼圖區 -->
            <div class="puzzle-section">
              <div
                class="puzzle-grid"
                :style="{
                  width: boxSize + 'px',
                  height: (boxSize * rows) / cols + 'px',
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                  gridTemplateRows: `repeat(${rows}, 1fr)`,
                }"
              >
                <div
                  v-for="(tile, index) in availableTiles"
                  :key="tile.id"
                  class="puzzle-tile"
                  :class="{
                    'puzzle-tile-selected': selectedTileIndex === index,
                  }"
                  :draggable="true"
                  @click="selectTile(tile, index)"
                  @dragstart="dragTile(tile, index)"
                  :style="{
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: `${boxSize}px ${(boxSize * rows) / cols}px`,
                    backgroundPosition: tile.bgPos,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#f8fafc',
                  }"
                ></div>
              </div>
            </div>

            <!-- 操作提示 -->
            <div class="help-text">
              <p>💡 提示：點擊拼圖塊，然後點擊或拖曳到目標位置放置</p>
            </div>

            <div class="step-footer">
              <button @click="prevStep" class="back-button">← 返回</button>
              <button @click="resetGame" class="reset-button">
                ⟳ 重新開始
              </button>
            </div>
          </div>
        </div>

        <!-- 完成提示 -->
        <div v-if="showCompletion" class="completion-overlay">
          <div class="completion-modal">
            <div class="completion-card">
              <div class="completion-image-container">
                <img
                  :src="currentImage"
                  class="completion-image"
                  alt="完成的拼圖"
                />
                <div class="completion-image-overlay"></div>
              </div>
              <div class="completion-content">
                <div class="completion-title">🎉恭喜完成！🎉</div>
                <div class="completion-stars">
                  <span class="completion-star">⭐</span>
                  <span class="completion-star">⭐</span>
                  <span class="completion-star">⭐</span>
                </div>
                <button @click="backToStart" class="completion-button">
                  回到開始
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MobileOnly>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import puzzleImage from "@/assets/puzzle.png";
import schoolImage from "@/assets/school.png";
import dessertImage from "@/assets/school-dessert.png";
import slideImage from "@/assets/school-slide.png";
import goHomeImage from "@/assets/school-go-home.png";
import MobileOnly from "@/components/MobileOnly.vue";

// 遊戲狀態
const currentStep = ref(1);
const selectedSize = ref("");
const selectedImageIndex = ref(null);
const showCompletion = ref(false);

// 拼圖遊戲相關
const boxSize = 300;
const availableTiles = ref([]);
const placedTiles = ref([]);
const selectedTile = ref(null);
const selectedTileIndex = ref(null);
const draggedTile = ref(null);
const isComplete = ref(false);

// 音效
const correctSound = new Audio("/correct.mp3");
const wrongSound = new Audio("/wrong.mp3");

// 難度選項
const difficulties = [
  {
    value: "1x1",
    name: "簡單",
    size: "1×1 拼圖",
    stars: 1,
  },
  {
    value: "2x2",
    name: "普通",
    size: "2×2 拼圖",
    stars: 2,
  },
  {
    value: "3x3",
    name: "困難",
    size: "3×3 拼圖",
    stars: 3,
  },
  {
    value: "4x4",
    name: "專家",
    size: "4×4 拼圖",
    stars: 4,
  },
];

// 可用圖案
const availableImages = [
  {
    src: schoolImage,
    name: "出發上學去",
  },
  {
    src: dessertImage,
    name: "開心吃點心",
  },
  {
    src: slideImage,
    name: "一起溜滑梯",
  },
  {
    src: goHomeImage,
    name: "放學回家",
  },
];

// 計算屬性
const cols = computed(() => parseInt(selectedSize.value.split("x")[0]));
const rows = computed(() => parseInt(selectedSize.value.split("x")[1]));
const totalTiles = computed(() => rows.value * cols.value);
const placedCount = computed(
  () => placedTiles.value.filter((tile) => tile !== null).length
);
const progressPercentage = computed(
  () => (placedCount.value / totalTiles.value) * 100
);
const currentImage = computed(
  () => availableImages[selectedImageIndex.value]?.src || puzzleImage
);

// 步驟控制

function nextStep() {
  if (currentStep.value === 1 && selectedSize.value) {
    currentStep.value = 2;
  } else if (currentStep.value === 2 && selectedImageIndex.value !== null) {
    currentStep.value = 3;
    initGame();
  }
}

function selectDifficulty(difficulty) {
  selectedSize.value = difficulty;
  // 自動進入下一步
  setTimeout(() => {
    currentStep.value = 2;
  }, 300);
}

function selectImage(index) {
  selectedImageIndex.value = index;
  // 自動進入下一步
  setTimeout(() => {
    currentStep.value = 3;
    initGame();
  }, 300);
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
}

function backToStart() {
  currentStep.value = 1;
  selectedSize.value = "";
  selectedImageIndex.value = null;
  showCompletion.value = false;
  isComplete.value = false;
}

function resetGame() {
  initGame();
}

// 拼圖遊戲邏輯
function initGame() {
  const total = rows.value * cols.value;
  const temp = [];
  for (let i = 0; i < total; i++) {
    const x = i % cols.value;
    const y = Math.floor(i / cols.value);
    const w = boxSize / cols.value;
    const h = (boxSize * rows.value) / cols.value / rows.value;
    temp.push({ id: i, bgPos: `-${x * w}px -${y * h}px`, position: i });
  }
  availableTiles.value = [...temp].sort(() => Math.random() - 0.5);
  placedTiles.value = Array(total).fill(null);
  selectedTile.value = null;
  selectedTileIndex.value = null;
  isComplete.value = false;
  showCompletion.value = false;
}

function selectTile(tile, index) {
  selectedTile.value = tile;
  selectedTileIndex.value = index;
}

function placeTileAt(index) {
  if (!selectedTile.value) return;
  if (placedTiles.value[index]) return;

  if (selectedTile.value.position === index) {
    placedTiles.value[index] = selectedTile.value;
    availableTiles.value.splice(selectedTileIndex.value, 1);

    try {
      correctSound.play();
    } catch (e) {
      // 音效播放失敗時忽略
    }

    checkComplete();
  } else {
    try {
      wrongSound.play();
    } catch (e) {
      // 音效播放失敗時忽略
    }
  }

  selectedTile.value = null;
  selectedTileIndex.value = null;
}

function dragTile(tile, index) {
  draggedTile.value = { tile, index };
}

function dropTile(index) {
  if (!draggedTile.value || placedTiles.value[index]) return;

  if (draggedTile.value.tile.position === index) {
    placedTiles.value[index] = draggedTile.value.tile;
    availableTiles.value.splice(draggedTile.value.index, 1);

    try {
      correctSound.play();
    } catch (e) {
      // 音效播放失敗時忽略
    }

    checkComplete();
  } else {
    try {
      wrongSound.play();
    } catch (e) {
      // 音效播放失敗時忽略
    }
  }

  draggedTile.value = null;
}

function checkComplete() {
  isComplete.value = placedTiles.value.every(
    (tile, i) => tile && tile.position === i
  );

  if (isComplete.value) {
    setTimeout(() => {
      showCompletion.value = true;
    }, 500);
  }
}
</script>

<style scoped>
/* 主容器 */
.puzzle-game-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5c65bb  100%);
  padding: 1rem 0.6rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  position: relative;
  overflow: hidden;
}

.puzzle-game-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="20" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="40" cy="40" r="1" fill="rgba(255,255,255,0.06)"/><circle cx="60" cy="60" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="30" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="90" cy="70" r="1" fill="rgba(255,255,255,0.06)"/></svg>');
  pointer-events: none;
  opacity: 0.6;
}

.puzzle-game-wrapper {
  max-width: 28rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* 標題區域 */
.title-section {
  margin-bottom: 1rem;
}

.title-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.back-nav-button {
  background: rgba(255, 255, 255, 0.2);
  color: #4a5568;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.back-nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.game-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  flex: 1;
  text-align: center;
  margin: 0;
}

.title-spacer {
  width: 2.5rem;
}

/* 步驟指示器 */
.step-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.step-number {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.step-item.active .step-number {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  font-weight: 700;
}

.step-item.completed .step-number {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.step-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.step-item.active .step-text {
  color: white;
  font-weight: 600;
}

.step-line {
  width: 3rem;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.step-line.active {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
}

/* 步驟內容 */
.step-content {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-panel {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  flex: 1;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.placeholder {
  width: 80px;
}

.game-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.step-description {
  color: #6b7280;
  text-align: center;
  margin-bottom: 2rem;
}

.step-footer {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* 難度選擇 */
.difficulty-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.difficulty-card {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.difficulty-card:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.2);
}

.difficulty-card.selected {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.difficulty-stars {
  margin-bottom: 0.5rem;
}

.star {
  font-size: 1.5rem;
  margin: 0 0.1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.difficulty-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.difficulty-desc {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
}

.difficulty-size {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* 圖案選擇 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.image-card {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image-card:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.2);
}

.image-card.selected {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.image-preview {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.image-name {
  padding: 0.75rem;
  text-align: center;
  font-weight: 500;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 按鈕 */
.completion-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

/* 遊戲界面 */

.reset-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.reset-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 進度條 */
.progress-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.progress-label {
  font-size: 0.875rem;
  color: white;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.progress-bar-wrapper {
  flex: 1;
  max-width: 8rem;
}

.progress-bar-bg {
  width: 100%;
  height: 0.75rem;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-bar-fill {
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transition: width 0.7s ease-out;
  position: relative;
  backdrop-filter: blur(5px);
}

.progress-bar-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: shine 2s infinite;
}

@keyframes shine {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.progress-text {
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  min-width: 3rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 目標區域 */
.target-section {
  margin-bottom: 1rem;
}

.target-grid {
  position: relative;
  margin: 0 auto;
  display: grid;
  gap: 0.25rem;
  border: 2px dashed #d1d5db;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #f9fafb;
}

.target-cell {
  width: 100%;
  height: 100%;
  border: 1px solid #e5e7eb;
  position: relative;
  background: white;
  transition: all 0.3s;
  cursor: pointer;
}

.target-cell:hover {
  background: #f9fafb;
}

.target-cell-filled {
  background: #f0fdf4;
  border-color: #86efac;
}

.target-cell-empty {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.tile-image {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

.tile-image:hover {
  transform: scale(1.05);
}

.target-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  pointer-events: none;
}

/* 拼圖區域 */
.puzzle-section {
  margin-bottom: 1rem;
}

.puzzle-grid {
  margin: 0 auto;
  display: grid;
  gap: 0.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
}

.puzzle-tile {
  width: 100%;
  height: 100%;
  cursor: grab;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  background-color: #f8fafc;
}

.puzzle-tile:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

.puzzle-tile-selected {
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5), 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

/* 幫助文字 */
.help-text {
  text-align: center;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 完成提示 */
.completion-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.5s ease-out;
  backdrop-filter: blur(8px);
}

.completion-modal {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  0% {
    transform: scale(0.3) rotate(-10deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.completion-card {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 24rem;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.completion-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.completion-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
}

.completion-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: imageReveal 1s ease-out;
}

@keyframes imageReveal {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.completion-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.completion-content {
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.completion-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -10px, 0);
  }
  70% {
    transform: translate3d(0, -5px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.completion-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: titleGlow 2s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  100% {
    text-shadow: 0 2px 20px rgba(255, 255, 255, 0.5);
  }
}

.completion-text {
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.completion-stars {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.completion-star {
  font-size: 2rem;
  animation: starTwinkle 1.5s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.completion-star:nth-child(1) {
  animation-delay: 0s;
}

.completion-star:nth-child(2) {
  animation-delay: 0.3s;
}

.completion-star:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes starTwinkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
}

.completion-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.completion-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
}

/* 拖拽體驗 */
[draggable="true"] {
  cursor: grab;
}

[draggable="true"]:active {
  cursor: grabbing;
}

/* 防止圖片被選中 */
img {
  pointer-events: none;
  user-select: none;
}

/* 改善觸控體驗 */
html,
body {
  touch-action: manipulation;
  overscroll-behavior: contain;
  user-select: none;
}
</style>


