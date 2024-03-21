const axios = require('axios')

const defaultOptions = {
  baseURL: 'http://211.172.242.188:8003/executeDBQuery',
  timeout: 10000,
  interceptors: {
    request: (config) => {
      console.log('request.use')
      return config
    },
  },
}

const axiosInstance = axios.create(defaultOptions)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   // 로그아웃 처리
    // }
    console.log('response.use')
    return Promise.reject(error)
  },
)

module.exports = axiosInstance
