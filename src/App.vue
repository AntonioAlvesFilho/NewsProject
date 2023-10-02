<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex flex-column">
    <NavBar />
    <div>
      <RouterView />
    </div>
    <FooterView />
  </div>
</template>
<script>
import NavBar from './components/common/NavBar.vue'
import FooterView from './components/common/FooterView.vue'
export default {
  components: { NavBar, FooterView }
}
</script>
<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
