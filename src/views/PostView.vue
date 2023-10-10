<template>
  <div class="d-flex justify-content-center">
    <div class="postRead">
      <p><router-link to="/">Tudo Eletronico</router-link> > {{ category }}</p>

      <h1>{{ title }}</h1>
      <img :src="image" />
      <p style="text-align: center">image caption for understanding</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
      category: ''
    }
  },
  mounted() {
    // Obtém a URL atual
    const currentURL = window.location.href

    // Procura a parte da URL a partir de "posts/" e que seja o id, função bem útil
    const match = currentURL.match(/\/posts\/(\d+)/)

    //Aqui eu pego apenas o id, que é a primeira coisa que aparece na url
    const postId = match[1]

    this.getpost(postId)
  },
  methods: {
    getpost(id) {
      axios.get('api/auth/posts/' + id).then((response) => {
        this.title = response.data.title
        this.description = response.data.description
        this.image = response.data.image
        this.category = response.data.categories[0].name
      })
    }
  }
}
</script>
<style scoped>
.postRead {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 768px;
}
.postRead p {
  font-size: 18px;
}

.postRead img {
  max-width: 100%;
}

@media (max-width: 768px) {
  .postRead p {
    padding-top: 10vw;
    font-size: 18px;
    text-align: justify;
  }
}
</style>
