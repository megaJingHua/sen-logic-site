<template>
  <div class="learn-vue3">
    <h2>🌱 30 Days 學習 Vue 3 實作</h2>
    <nav>
      <router-link to="/learn-vue3/day1">Day 1</router-link> |
      <router-link to="/learn-vue3/day2">Day 2</router-link>
    </nav>
    <router-view />
  </div>
</template>


<style scoped>
.learn-vue3 {
  padding: 12px;
}

a {
  color: #1a4632;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  color:#42b983;
}
</style>