<template>
  <main class="form-signin login-register-form m-auto">
    <h1 class="h3 mb-4 fw-normal text-center">Please sign in</h1>
    <Forms ref="loginValidate" v-on:submit="login()">
      <div class="mb-3 align-center">
        <label name="email" for="floatingInput">Email address</label>

        <Field
          name="email"
          v-model="email"
          type="email"
          rules="required|email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com" />
        <ErrorMessage
          style="color: darkorange"
          v-if="!loading.running"
          name="email"></ErrorMessage>
      </div>

      <div class="mb-3 align-center">
        <label for="floatingPassword">Password</label>

        <Field
          name="password"
          v-model="password"
          type="password"
          rules="required|min:5"
          class="form-control"
          id="floatingPassword"
          placeholder="Password" />
        <ErrorMessage style="color: darkorange" name="password"></ErrorMessage>
      </div>

      <div class="checkbox mb-3">
        <label>
          <Field name="remember-me" type="checkbox" value="remember-me" />
          Remember me
        </label>
      </div>
      <div style="height: 64px" class="d-flex">
        <button
          :disabled="loading.running"
          type="submit"
          class="w-100 mb-4 w-100 h-100 btn btn-lg btn-primary">
          <p v-if="!loading.running">Login</p>
          <img
            v-else-if="loading.running"
            style="color: white; width: 50px"
            src="../../public/802.svg"
            alt="" />
        </button>
      </div>
      <RouterLink to="/forgot-password">Forgot Password?</RouterLink>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </Forms>
  </main>
</template>

<script>
import axios from 'axios'
import Cookie from '../middlewares/token'
import { Form as Forms, Field, ErrorMessage } from 'vee-validate'
import { useToast } from 'vue-toast-notification'
const $toast = useToast()

export default {
  components: { Forms, Field, ErrorMessage },
  data() {
    return {
      email: '',
      password: '',
      loading: {
        running: false
      },
      loginResponse: {
        color: '',
        message: ''
      }
    }
  },

  methods: {
    login() {
      //replace the "login" with a loading img
      this.loading.running = true

      // First it verifies if the inputs are filled correctly
      try {
        const validator = this.$refs.loginValidate.validate()
        if (!validator) {
          return
        }
      } catch (error) {
        return error
      }

      //thens

      //payload = input.characters
      const payload = {
        email: this.email,
        password: this.password
      }

      //reset error message to see clearly if it refresh on login click
      axios
        //posting payload to api and waiting for response
        .post('api/login', payload)

        .then((response) => {
          //getting JWT Token from api
          const token = `${response.data.token_type} ${response.data.access_token}`

          //setting js-Cookie to insert JWT Token as a cookie in browser
          Cookie.setToken(token)
          // sending the api response, with the user data like name, id, genre ETC. to vuex to show on front end
          this.$store.commit('STORE_USER', response.data.data)
          //Stop img-loading show
          this.loading.running = false
          console.log(response.statusText)
          $toast.success('Logged successfully', {
            position: 'top-right'
          })
          this.$router.push('/')
        })
        .catch((error) => {
          const errorMessage =
            // A login authentication error is expected here, but if is not what is returned for some reason, like an axios url error, it returns a generic error (unexpected error) instead of crashing the aplication.
            error?.response?.data?.message || 'Unexpected Error'

          this.loading.running = false
          $toast.error(errorMessage, {
            position: 'bottom-right'
          })
        })
    }
  }
}
</script>
