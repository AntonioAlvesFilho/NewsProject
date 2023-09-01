import { createStore } from 'vuex'
import user from './user'
import todo from './todo'
import post from './post'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    post,
    todo
  }
})
