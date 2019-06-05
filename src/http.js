import router from './router'
import axios from 'axios'
// import router from 'src/router/index.js'
// const axios = {}
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = process.env.BASE_API

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (window.localStorage.getItem('token')) {
      config.headers.Authorization = window.localStorage.getItem('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          window.localStorage.setItem('token', null)
          router.replace({
            path: '/',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)
export default axios
