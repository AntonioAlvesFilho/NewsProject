<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <NavBar />
    <div>
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
<style></style>
