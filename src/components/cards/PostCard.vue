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

  <div :style="{ backgroundImage: 'url(' + image + ')' }" class="itens">
    <h3>{{ title }}</h3>
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

<style>
.itens {
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  justify-content: flex-start;
  align-items: end;
  color: white;
  border-radius: 0.8vw;
}

.itens h3 {
  font-size: 26px;
  margin: 2%;
}
</style>
