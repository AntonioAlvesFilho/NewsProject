export default {
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  created() {
    this.updateWindowWidth()
    console.log('teste	')
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth + 0.1
    }
  },
  watch: {
    windowWidth(newWidth) {
      if (newWidth < 992) {
        this.mobileWidth = true
        console.log('menor')
      } else {
        console.log('maior')
        this.mobileWidth = false
      }
    }
  }
}
