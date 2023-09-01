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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 flex-row center navul">
          <li class="nav-item mx-1">
            <router-link
              to="/"
              class="nav-link"
              :class="{
                active: $route.path == '/'
              }"
              @click="$router.push('/')"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link
              to="/login"
              class="nav-link"
              :class="{
                active: $route.path == '/login'
              }"
              @click="$router.push('/login')"
              >Login</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link
              to="/register"
              class="nav-link"
              :class="{
                active: $route.path == '/register'
              }"
              @click="$router.push('/register')"
              >Cadastre-se</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link
              to="/profile"
              class="nav-link"
              :class="{
                active: $route.path == '/profile'
              }"
              @click="$router.push('/profile')"
              >Perfil</router-link
            >
          </li>

          <li>
            <button class="btn-lg mx-3">
              <router-link
                to="/contact"
                class="nav-link"
                :class="{
                  active: $route.path == '/contact'
                }"
                @click="$router.push('/contact')"
                style="color: #d9ef3d"
                >Contato</router-link
              >
            </button>
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
  },
  created() {
    console.log()
  }
}
</script>
<style scoped>
nav {
  padding: 0.5% 7% 0.5% 9%;

  background: rgb(0, 92, 86);
  background: linear-gradient(
    90deg,
    #00847f 0%,
    #00847f 50%,
    rgb(0, 102, 92) 100%
  );
  width: 100%;
}

a {
  display: flex;
  flex-direction: row;
}
.navul {
  align-items: center;
  width: 620px;
}

.navOffCanvas {
  background-color: rgb(0, 105, 97);
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
  color: #00835c;
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
  .navul {
    width: 800px;
  }

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
  .navul {
    width: 650px;
  }
}

@media (max-width: 992px) {
  nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  .navbar-toggler {
    color: #007268;
  }
  .center {
    justify-content: space-around;
    align-items: center;
    font-size: 1.75vw;
  }

  .center button {
    font-size: 2vw;
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
    color: #00835c;
    border: 1px solid;
  }
}
</style>
