<template>
  <h1>teste</h1>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: '40-india-pousa-na-lua'
    }
  },
  created() {
    this.getpost()
    console.log()
  },

  mounted() {
    // Obtém a URL atual
    const currentURL = window.location.href

    // Procura a parte da URL a partir de "posts/"

    const match = currentURL.match(/\/posts\/(\d+)/)

    const postId = match[1]

    console.log(postId, ' passou por aqui')
  },
  methods: {
    getpost() {
      const url = this.url
      axios
        .get('/api/auth/posts/' + url)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style></style>
