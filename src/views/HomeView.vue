<template>
  <div>
    <Splide
      class="width"
      :options="{
        rewind: true,
        autoplay: true,
        pagination: false,
        type: 'fade',
        interval: 4000
      }"
      aria-label="My Favorite Images">
      <PostCard v-for="post in this.posts" :key="post.id" :post="post" />
    </Splide>
  </div>
</template>
<script>
import axios from 'axios'
import PostCard from '../components/cards/PostCard.vue'
export default {
  data() {
    return {
      posts: []
    }
  },

  created() {
    this.getPosts()
  },
  components: { PostCard },
  methods: {
    getPosts() {
      axios
        .get('/api/auth/posts/public')
        .then((response) => {
          this.posts = response.data.data.map((o) => ({
            ...o
          }))
          console.log(response)
          this.loading.ico = false
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>
<style></style>
