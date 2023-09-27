<template>
  <h1>teste</h1>
  <PostCard
    v-for="(post, index) in this.posts"
    :key="post.id"
    :post="post"
    :class="'post' + index" />
</template>
<script>
import axios from 'axios'
import PostCard from '@/components/cards/PostCard.vue'
export default {
  data() {
    return {
      posts: []
    }
  },
  components: { PostCard },
  mounted() {
    // Obtém a URL atual
    const currentURL = window.location.href

    // Procura a parte da URL a partir de "categories/" e que seja o nome da categoria, função bem útil.
    const match = currentURL.match(/\/categories\/([^/]+)/)

    const categoryName = match[1]

    //Aqui eu pego apenas o id, que é a primeira coisa que aparece na url
    console.log(categoryName)

    this.getPostByCategory(categoryName)
  },
  methods: {
    getPostByCategory(categoryName) {
      axios
        .get('api/auth/categories/' + categoryName)
        .then((response) => {
          this.posts = response.data.posts.map((o) => ({
            ...o
          }))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
.postRead {
  display: flex;
  flex-direction: column;
  max-width: 1024px;
}

.postRead img {
  max-width: 100%;
}
</style>
