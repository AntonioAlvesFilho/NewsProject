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
    <PostCard v-for="post in this.posts" :key="post.id" :post="post" />
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
.posts {
  display: flex;
  width: 100%;
}

.item:nth-child(1) {
  flex: 2 1 0;
  color: red;
}

.item:nth-child(2) {
  color: blue;
  flex: 1 1 0;
}
.item:nth-child(2) img {
  transform: scale(5);
}

.item:nth-child(3) {
  color: green;
  flex: 0.8 1 0;
}

.posts img {
  width: 100%;
}

.item {
  position: relative;
  overflow: hidden;

  border-radius: 1vw;
}
.item .text-item {
  position: absolute;
  bottom: 0%;
  left: 0%;
  text-align: center;
  color: #ffffff;
}

.grid {
  grid-template-columns: 50% 1fr 20%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'feat0 feat1 feat2'
    'feat0 feat1 feat3';
  gap: 8px;
}
</style>
