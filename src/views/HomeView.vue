<template>
  <!-- <Splide
      class="width"
      :options="{
        rewind: true,
        autoplay: true,
        pagination: false,
        type: 'fade',s
        interval: 4000
      }"
      aria-label="My Favorite Images">
      <PostCard v-for="post in this.posts" :key="post.id" :post="post" />
    </Splide>-->
  <section class="posts">
    <PostCard
      v-for="(post, index) in this.posts"
      :key="post.id"
      :post="post"
      :class="'post' + index" />
  </section>
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
  },
  computed: {
    showFirstFourPosts() {
      return this.posts.slice(0, 4)
    }
  }
}
</script>
<style>
* {
  font-family: 'Roboto', sans-serif;
}

.posts {
  display: grid;
  width: 100%;
  height: 60vh;
  grid-template-columns: 50% 1fr 20%;
  grid-template-rows: auto auto;
  grid-template-areas:
    'post0 post1 post2'
    'post0 post1 post3';
  gap: 0.4%;
  padding: 0.4%;
  display: grid;
  transition: left ease 400ms;
}

.post0 {
  grid-area: post0;
}

.post1 {
  grid-area: post1;
}

.post2 {
  grid-area: post2;
}

.post3 {
  grid-area: post3;
}

@media (max-width: 992px) {
  .posts {
    margin-top: 7%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      'post0 post1 post2 post3'
      'post0 post1 post2 post3';
  }
}
</style>
