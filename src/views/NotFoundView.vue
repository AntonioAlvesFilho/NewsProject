<template>
  <div class="d-flex flex-column align-items-center">
    <h1>Página não encontrada</h1>
    <p>A página que você está procurando não existe.</p>
    <router-link style="text-decoration: underline; color: cadetblue" to="/"
      >Voltar para a página inicial</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
  created() {
    console.log('foi')
  }
}
</script>
