<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <NavBar />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
<script>
import NavBar from './components/common/NavBar.vue'
export default {
  components: { NavBar }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  max-width: 1024px;
}
</style>
