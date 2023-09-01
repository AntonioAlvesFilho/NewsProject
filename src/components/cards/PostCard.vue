<template>
  <SplideSlide>
    <img :src="image" alt="" />
    <div>
      <h1>
        {{ post.title }}
      </h1>
      <p>{{ post.description }}</p>
    </div>
  </SplideSlide>
</template>

<script>
export default {
  name: 'PostCard',
  data() {
    return {
      image: '',
      title: '',
      description: ''
    }
  },
  created() {
    this.image = this.post.image
    this.title = this.post.title
    this.description = this.post.description
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
img {
  width: 100%;
}
</style>
