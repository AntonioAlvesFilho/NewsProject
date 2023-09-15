<template>
  <div :style="{ backgroundImage: 'url(' + image + ')' }" class="itens">
    <a :href="'http://localhost:5173/posts/' + url">
      <h3>{{ title }}</h3>
    </a>
  </div>
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
      url: '',
      mobileWidth: true
    }
  },
  mixins: [windowWidthMixin],
  created() {
    this.image = this.post.image
    this.title = this.post.title
    this.description = this.post.description
    this.url = this.post.url
  },
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
.itens {
  display: flex;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  justify-content: flex-start;
  align-items: end;
  color: white;
  border-radius: 0.7vw;
}

.itens h3 {
  font-size: 26px;
  margin: 2%;
}

.itens a {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 992px) {
}
</style>
