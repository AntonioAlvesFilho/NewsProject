<template>
  <div class="d-flex flex-column align-items-center">
    <div>
      <ul>
        <h2 class="text-center">Seja bem vindo(a)</h2>
        <h2 class="text-center">{{ name }}</h2>
      </ul>
    </div>

    <div class="d-flex flex-row">
      <PostCard v-for="post in this.posts" :key="post.id" :post="post" />
    </div>

    <div class="w-50">
      <Forms class="text-center" ref="postValidate" v-on:submit="addPost()">
        <h3>Adicionar Novo Post</h3>

        <div class="d-flex">
          <span class="input-group-text" id="describe">Título</span>
          <Field
            aria-describedby="describe"
            name="title"
            v-model="title"
            type="string"
            rules="required"
            class="form-control"
            id="title"
            placeholder="título" />
        </div>

        <div class="d-flex">
          <span class="input-group-text" id="describeDesc">Texto</span>
          <Field
            aria-describedby="describeDesc"
            name="description"
            v-model="description"
            type="string"
            rules="required"
            class="form-control"
            id="description"
            placeholder="texto" />
        </div>

        <div class="d-flex">
          <Field
            aria-describedby="describeImage"
            name="image"
            v-model="image"
            type="file"
            rules="mimes:image/*"
            class="form-control"
            id="image"
            placeholder="imagem" />
        </div>
        <button class="btn btn-primary" type="submit">Adicionar Post</button>
      </Forms>
      <br />
      <Forms class="text-center" ref="loginValidate" v-on:submit="addTodo()">
        <h3>Adicionar Nova Tarefa</h3>
        <Field
          name="todo"
          v-model="todo"
          type="string"
          rules="required"
          class="form-control"
          id="todo"
          placeholder="detalhe a tarefa" />
        <button class="btn btn-primary" type="submit">Adicionar Tarefa</button>
      </Forms>
    </div>
    <div>
      <ul class="list-group">
        <h2 class="text-center">Lista</h2>
        <TodoCard v-for="todo in this.todos" :key="todo.id" :todo="todo" />
      </ul>
      <div class="text-center" v-if="loading.ico">
        <img src="/circle.gif" style="width: 50px" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Form as Forms, Field } from 'vee-validate'
import TodoCard from '../components/cards/TodoCard.vue'
import PostCard from '../components/cards/PostCard.vue'

export default {
  data() {
    return {
      todos: [],
      posts: [],
      name: '',
      email: '',
      age: '',
      gender: '',
      since: '',
      image: '',
      title: '',
      description: '',
      loading: {
        ico: true
      },
      todo: '',
      post: ''
    }
  },
  components: { Forms, Field, TodoCard, PostCard },
  created() {
    const user = this.$store.state.user.user
    this.name = user.name
    this.email = user.email
    this.age = user.data_nascimento
    this.gender = user.genero
    this.since = user.created_at
    this.getTodos()
    this.getPosts()
  },
  methods: {
    getTodos() {
      axios
        .get('api/auth/todos')
        .then((response) => {
          this.todos = response.data.data.map((o) => ({
            ...o,
            state: 'show'
          }))
          console.log(response)
          this.loading.ico = false
        })
        .catch((response) => {
          console.log(response)
        })
    },
    getPosts() {
      axios
        .get('api/auth/posts')
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
    },
    addTodo() {
      this.label = {
        label: this.todo
      }
      axios
        .post('api/auth/todos', this.label)
        .then((response) => {
          console.log(response)
          this.getTodos()
          this.loading.ico = true
        })
        .catch((response) => {
          console.log(response)
        })
    },
    addPost() {
      const payload = {
        title: this.title,
        description: this.description,
        image: this.image
      }
      axios
        .post('api/auth/posts', payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          console.log(response)
          this.getPosts()
          this.loading.ico = true
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
.width {
  max-width: 1024px;
}
</style>
