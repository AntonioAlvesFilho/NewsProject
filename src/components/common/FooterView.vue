<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <div class="row d-flex justify-content-center">
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </form>
      </section>

      <section class="">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 m-auto">
            <h1 style="color: #004aad" class="text-uppercase">Categorias</h1>

            <ul class="list-unstyled mb-0">
              <li class="nav-item mx-1">
                <router-link to="/">Início</router-link>
              </li>
              <li class="nav-item mx-1">
                <router-link to="/categories/tecnologia"
                  >Tecnologia</router-link
                >
              </li>
              <li class="nav-item mx-1">
                <router-link to="/categories/ciencia">Ciência</router-link>
              </li>
              <li class="nav-item mx-1">
                <router-link to="/categories/jogos">Jogos</router-link>
              </li>
              <li class="nav-item mx-1">
                <router-link to="/categories/social">Redes Sociais</router-link>
              </li>
              <li class="nav-item mx-1">
                <router-link to="/categories/computador"
                  >Computador</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgb(12, 12, 12)">
      <p>© 2023 Copyright</p>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
  background-color: rgb(46, 46, 46);
  margin: 0;
  padding: 0;
  max-width: 100%;
}
</style>
