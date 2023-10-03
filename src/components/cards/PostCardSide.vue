<template>
  <router-link :to="`/posts/${slug}`">
    <div class="itens">
      <div class="imageWidth">
        <img :src="image" alt="noticia" />
      </div>
      <p>{{ title }}</p>
    </div>
  </router-link>
</template>

<script>
import windowWidthMixin from '../../mixins/windowWidthMixin.js'
export default {
  name: 'PostCard',
  data() {
    return {
      image: '',
      title: '',
      description: '',
      slug: '',
      mobileWidth: false
    }
  },
  mixins: [windowWidthMixin],
  created() {
    this.image = this.post.image
    this.title = this.post.title
    this.description = this.post.description
    this.slug = this.post.url
  },
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.itens {
  display: flex;
  align-items: center;
  gap: 2%;
  padding: 1.2%;
  transition: transform 0.3s ease;
}

.itens:hover {
  transform: scale(1.02);
}

img {
  max-width: 100%;
  border-radius: 0.5vw;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.imageWidth {
  max-width: 30%;
}
</style>
