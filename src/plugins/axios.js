import axios from 'axios'
import Cookie from '../middlewares/token'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.request.use(
  function (config) {
    const token = Cookie.getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
) //interceptadores servem para executar um trecho de código antes do Then ou Catch do axios

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
