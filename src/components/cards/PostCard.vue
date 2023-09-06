<template>
  <!-- <SplideSlide>
    <img :src="image" alt="" />
    <div>
      <h1>
        {{ post.title }}
      </h1>
      <p>{{ post.description }}</p>
    </div>
  </SplideSlide> -->

  <div class="item">
    <img :src="image" alt="" />
    <div class="text-item">
      <h3>
        {{ post.title }}
      </h3>
    </div>
  </div>
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

<style></style>
