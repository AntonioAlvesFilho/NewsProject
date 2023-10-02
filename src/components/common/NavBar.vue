<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link to="/">
          <img src="" alt="" />
        </router-link>
        <div class="menu-meneger">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div class="collapse navbar-collapse sidebar" id="navbarSupportedContent">
        <ul class="navbar-nav flex-row categories-ul">
          <li class="nav-item mx-1">
            <router-link to="/" class="nav-link">Início</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/tecnologia" class="nav-link"
              >Tecnologia</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/ciencia" class="nav-link"
              >Ciência</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/jogos" class="nav-link"
              >Jogos</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/social" class="nav-link"
              >Redes Sociais</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/computador" class="nav-link"
              >Computador</router-link
            >
          </li>

          <li class="nav-item mx-1">
            <router-link to="/categories/computador" class="nav-link"
              >Computador</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div
      class="offcanvas offcanvas-end navOffCanvas"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel">
      <img src="" />
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-block w-100">
        <router-link
          to="/"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          :class="{
            active: $route.path == '/'
          }"
          @click="$router.push('/')">
          <li class="nav-item mx-1">Inicio</li></router-link
        >
        <router-link
          to="/login"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          :class="{
            active: $route.path == '/login'
          }"
          @click="$router.push('/login')">
          <li class="nav-item mx-1">Login</li></router-link
        >
        <router-link
          to="/register"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          :class="{
            active: $route.path == '/register'
          }"
          @click="$router.push('/register')">
          <li class="nav-item mx-1">Cadastre-se</li></router-link
        >
        <router-link
          to="/profile"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          :class="{
            active: $route.path == '/profile'
          }"
          @click="$router.push('/profile')">
          <li class="nav-item mx-1">Perfil</li></router-link
        >
      </ul>
      <button class="btn-lg mx-3">
        <router-link
          to="/contact"
          class="nav-link"
          style="color: #d9ef3d"
          data-bs-dismiss="offcanvas"
          >Contato</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      loading: false
    }
  }
}
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  padding: 0.5% 7% 0.5% 9%;
  background: rgb(17, 17, 17);
  width: 100%;
  color: white;
}

.navOffCanvas {
  background-color: rgb(20, 20, 20);
  display: flex;
  align-items: center !important;
  gap: 3vw;
  padding: 1%;
  width: 60vw;
}

.navOffCanvas img {
  max-width: 30%;
}

.sideroute {
  border: 1px solid white;
  display: flex;
  justify-content: flex-start;
  padding: 2vw;
}

.navOffCanvas a {
  color: white;
}

.center {
  justify-content: end;
}

.navbar-toggler {
  color: #d9ef3d;
}

.btn-lg {
  background-color: transparent;
  color: #d9ef3d;
  border: 1px solid #d9ef3d;
  border-radius: 10px;
}

.navbar-toggler[data-v-4bc99714] {
  color: #0c0c0c;
  padding: 1vw 2vw;
}

.menu-meneger {
  display: flex;
  flex-direction: row-reverse;
}

img {
  max-width: 175px;
}

@media (min-width: 1440px) {
  h3 {
    font-size: 54px !important;
  }

  h4 {
    font-size: 43.2px !important;
  }

  h3 {
    font-size: 43.2px !important;
  }

  p {
    font-size: 18px !important;
  }
}

@media (max-width: 1440px) {
}

@media (max-width: 992px) {
  nav {
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  .navbar-toggler {
    color: #161616;
  }

  .navbar-toggler-icon {
    width: 5vw;
  }
}

@media (max-width: 768px) {
}

@media (max-width: 540px) {
  a {
    padding: 0 !important;
    text-align: end;
  }

  .sideroute {
    padding: 2vw !important;
  }

  .container-fluid img {
    width: 125px;
  }

  .btn-lg {
    padding: 0.2rem 1rem;
  }
  .navbar-toggler {
    padding: 0px 10px !important;
  }

  .navbar-toggler[data-v-4bc99714] {
    color: #141414;
    border: 1px solid;
  }
}
</style>
