<template>
  <section>
    <div class="d-flex">
      <div class="posts">
        <PostCard
          v-for="(post, index) in this.posts"
          :key="post.id"
          :post="post"
          :class="'post' + index" />
      </div>
      <img
        v-if="loading.ico"
        src="../../public/circle.gif"
        alt="loading"
        class="loading-ico" />
    </div>
    <div class="lastest">
      <div>
        <h3>Sobre Tecnologia</h3>
        <PostCardSide
          v-for="tecPost in this.tecPosts"
          :key="tecPost.id"
          :post="tecPost" />
      </div>
      <div>
        <h3>Sobre Ciência</h3>
        <PostCardSide
          v-for="ciePost in this.ciePosts"
          :key="ciePost.id"
          :post="ciePost" />
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import PostCard from '../components/cards/PostCard.vue'
import windowWidthMixin from '../mixins/windowWidthMixin.js'
import PostCardSide from '@/components/cards/PostCardSide.vue'
export default {
  data() {
    return {
      posts: [],
      tecPosts: [],
      ciePosts: [],
      mobileWidth: false,
      loading: {
        ico: true
      }
    }
  },
  mixins: [windowWidthMixin],

  created() {
    this.getPosts(), this.getTecPosts(), this.getCiePosts()
  },
  components: { PostCard, PostCardSide },
  methods: {
    getPosts() {
      axios
        .get('api/auth/posts/')
        .then((response) => {
          this.posts = response.data.data.map((o) => ({
            ...o
          }))
          this.loading.ico = false
        })
        .catch((response) => {
          console.log(response)
        })
    },
    getTecPosts() {
      axios
        .get('api/auth/categories/' + 'tecnologia')
        .then((response) => {
          this.tecPosts = response.data.posts.map((o) => ({
            ...o
          }))
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getCiePosts() {
      axios
        .get('api/auth/categories/' + 'ciencia')
        .then((response) => {
          this.ciePosts = response.data.posts.map((o) => ({
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

.loading-ico {
  width: 10%;
  position: absolute;
}

.lastest {
  padding: 1.5%;
  display: flex;
  gap: 5%;
}

@media (max-width: 992px) {
  .posts {
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

@media (max-width: 768px) {
  .lastest {
    flex-direction: column;
  }
  .posts {
    grid-template-columns: repeat(2);
    height: 25vh;
  }
}
</style>
