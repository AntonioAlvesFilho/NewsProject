<template>
  <div>
    <h3>Ultimas noticias em {{ categoryName }}</h3>
    <PostCard
      v-for="(post, index) in this.posts"
      :key="post.id"
      :post="post"
      :class="'post' + index" />
  </div>
</template>
<script>
import axios from 'axios'
import PostCard from '@/components/cards/PostCard.vue'
export default {
  data() {
    return {
      posts: [],
      categoryName: ''
    }
  },
  components: { PostCard },
  mounted() {
    //Faz a primeira requisição para o banco, as demais serão feitas pela função watch
    const currentURL = window.location.href
    const match = currentURL.match(/\/categories\/([^/]+)/)
    const categoryName = match[1]
    this.categoryName = categoryName
    this.getPostByCategory(categoryName)
  },

  watch: {
    $route(to, from) {
      // Verifica se o parâmetro 'name' mudou na rota
      if (to.params.name !== from.params.name) {
        const categoryName = this.$route.params.name
        console.log(categoryName)
        this.categoryName = categoryName
        this.getPostByCategory(categoryName)
      }
    }
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
<style scoped>
.postRead {
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 90%;
}

.postRead img {
  max-width: 100%;
}
</style>
