<template>
  <section>
    <div class="posts">
      <PostCard
        v-for="(post, index) in this.posts"
        :key="post.id"
        :post="post"
        :class="'post' + index" />
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import PostCard from '../components/cards/PostCard.vue'
import windowWidthMixin from '../mixins/windowWidthMixin.js'
export default {
  data() {
    return {
      posts: [],
      mobileWidth: false
    }
  },
  mixins: [windowWidthMixin],

  created() {
    this.getPosts()
  },
  components: { PostCard },
  methods: {
    getPosts() {
      axios
        .get('api/auth/posts/public')
        .then((response) => {
          this.posts = response.data.data.map((o) => ({
            ...o
          }))
          this.loading.ico = false
        })
        .catch((response) => {
          console.log(response)
        })
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
  height: 65vh;
  grid-template-columns: 50% 1fr 20%;
  grid-template-rows: auto auto;
  grid-template-areas:
    'post0 post1 post2'
    'post0 post1 post3';
  gap: 1.3% 0.4%;
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      'post0 post1'
      'post0 post1';
  }
  .post2 {
    display: none;
    grid-area: unset;
  }

  .post3 {
    display: none;
    grid-area: unset;
  }
}
</style>
