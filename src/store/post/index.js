export default {
  nameSpaced: true,
  state: () => ({
    post: {}
  }),
  mutations: {
    STORE_POST(state, post) {
      state.post = post
    }
  }
}
