<template>
  <main class="form-signin login-register-form m-auto">
    <Forms ref="registerForm" v-on:submit="register()">
      <h1 class="h3 mb-4 fw-normal text-center">Sign Up!</h1>

      <div class="mb-3 align-center">
        <label for="name">Name</label>
        <Field
          name="name"
          rules="required|alpha_spaces"
          v-model="name"
          type="text"
          class="form-control"
          id="floatingName" />
        <ErrorMessage class="errorText" name="name"></ErrorMessage>
      </div>

      <div class="mb-3 align-center">
        <label for="floatingEmail">Email address</label>
        <Field
          name="email"
          rules="required|email"
          v-model="email"
          type="email"
          class="form-control"
          id="floatingEmail" />
        <ErrorMessage class="errorText" name="email"></ErrorMessage>
      </div>

      <div class="">
        <label class="" for="date">Date of Birth</label>
        <div class="d-flex mb-3">
          <Field
            name="day"
            rules="required|length:2|max_value:31|min_value:1"
            v-model="day"
            class="form-control text-center"
            type="number"
            id="day" />
          /
          <Field
            name="mouth"
            rules="required|length:2|max_value:12|min_value:1"
            v-model="mouth"
            class="form-control text-center"
            type="number"
            id="mouth" />
          /
          <Field
            name="year"
            rules="required|length:4|max_value:2005|min_value:1910"
            v-model="year"
            class="form-control text-center"
            type="number"
            id="year" />
        </div>
        <div class="w-100">
          <ErrorMessage class="errorText" name="day"></ErrorMessage>
          <ErrorMessage class="errorText" name="mouth"></ErrorMessage>
          <ErrorMessage class="errorText" name="year"></ErrorMessage>
        </div>
      </div>

      <div class="column is-6">
        <p>Gender</p>

        <p class="control">
          <label class="radio m-1">
            <Field
              name="gender"
              v-model="genero"
              rules="required"
              value="male"
              type="radio" />
            Male
          </label>

          <label class="radio m-1">
            <Field name="gender" value="female" type="radio" />
            Female
          </label>
          <label class="radio m-1">
            <Field name="gender" value="other" type="radio" disabled />
            Other
          </label>
          <br />
          <ErrorMessage class="errorText" name="gender"></ErrorMessage>
        </p>
      </div>

      <div class="mb-3 align-center">
        <label for="floatingPassword">Password</label>
        <Field
          name="password"
          rules="required|min:5"
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword" />
        <ErrorMessage class="errorText" name="password"></ErrorMessage>
      </div>

      <div class="mb-5 align-center">
        <label for="floatingConfirmPassword">Confirm Password</label>
        <Field
          name="confirmation"
          rules="confirmed:@password|required"
          v-model="passwordConfirmation"
          type="password"
          class="form-control"
          id="Password" />
        <ErrorMessage class="errorText" name="confirmation"></ErrorMessage>
      </div>

      <button
        :disabled="loading.running"
        type="submit"
        class="w-100 mb-4 w-100 h-100 btn btn-lg btn-primary">
        <p v-if="!loading.running">Sign Up</p>
        <img
          v-else-if="loading.running"
          style="color: white; width: 50px"
          src="/802.svg"
          alt="loading" />
      </button>

      <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </Forms>
  </main>
</template>

<script>
import axios from 'axios'
import { Form as Forms, Field, ErrorMessage } from 'vee-validate'
import { useToast } from 'vue-toast-notification'
const $toast = useToast()

export default {
  components: { Forms, Field, ErrorMessage },
  data() {
    return {
      name: '',
      email: '',
      year: '',
      mouth: '',
      day: '',
      genero: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: '',
      loading: {
        running: false
      },
      registerResponse: {
        color: '',
        message: ''
      }
    }
  },

  methods: {
    register() {
      this.loading.running = true

      try {
        const validator = this.$refs.registerForm.validate()

        if (!validator) {
          return
        }
      } catch (error) {
        console.log(error)
      }

      const payload = {
        name: this.name,
        email: this.email,
        data_nascimento: this.year + '-' + this.mouth + '-' + this.day,
        genero: this.genero,
        password: this.password
      }

      axios
        .post('api/register', payload)
        .then((response) => {
          $toast.success('Registered Successfully', {
            position: 'top-right'
          })
          console.log(response.statusText)
          this.loading.running = false
          this.$router.push('/login')
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

<style>
.errorText {
  color: red;
  display: block;
}

.login-register-form {
  width: 60%;
  max-width: 1024px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>
