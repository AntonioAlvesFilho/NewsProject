<template>
  <main class="Forms -signin w-100 m-auto">
    <Forms v-on:submit="sendEmail()">
      <h1 class="h3 mb-4 fw-normal text-center">Forgot Password?</h1>

      <div class="Forms -floating mb-3 align-center">
        <label for="floatingEmail">Email address</label>
        <Field
          name="email"
          rules="required|email"
          v-model="email"
          type="email"
          class="Forms -control"
          id="floatingEmail"
          placeholder="name@example.com" />
        <ErrorMessage class="errorText" name="email"></ErrorMessage>
        <div
          v-if="responseMessage.message"
          :class="`text-${responseMessage.color} rounded d-flex`">
          <h5>{{ responseMessage.message }}</h5>
        </div>
      </div>

      <button
        :disabled="loading.running"
        type="submit"
        class="w-100 mb-4 w-100 h-100 btn btn-lg btn-primary">
        <p v-if="!loading.running">Send</p>
        <img
          v-else-if="loading.running"
          style="color: white"
          src="loading.png"
          alt="loading" />
      </button>

      <p class="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
    </Forms>
  </main>
</template>

<script>
import axios from 'axios'
import { Field, Form as Forms, ErrorMessage } from 'vee-validate'
export default {
  name: 'forgot-password',
  components: { Field, Forms, ErrorMessage },
  data() {
    return {
      email: '',
      responseMessage: {
        color: '',
        message: ''
      },
      loading: {
        running: false
      }
    }
  },
  methods: {
    sendEmail() {
      this.loading.running = true
      this.resetResponseMessage()

      const payload = { email: this.email }

      axios
        .post('api/forgot-password', payload)
        .then(
          (this.responseMessage.message =
            'Link para recuperação de Email enviado'),
          (this.responseMessage.color = 'success')
        )
        .catch((error) => {
          this.responseMessage.message = error.response.data.message
          this.responseMessage.color = 'danger'
        })
        .finally((this.loading.running = false))

      return ''
    },
    resetResponseMessage() {
      ;(this.responseMessage.message = ''), (this.responseMessage.color = '')
    }
  }
}
</script>
