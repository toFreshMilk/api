const axios = require('axios')

const defaultOptions = {
  baseURL: 'http://211.172.242.188:8003/executeDBQuery',
  timeout: 10000,
}

const axiosInstance = axios.create(defaultOptions)

axiosInstance.interceptors.request.use((config) => {
  // 요청 전 처리
  // config.headers['Authorization'] = `Bearer ${token}`;

  // console.log('request.config')
  // console.log(config)
  // console.log(ipAddress)

  return config
}, (error) => {
  console.log('request.error')
  console.log(error)
})

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('response.use.outfullfiled')
    // console.log(response)
    return response
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   // 로그아웃 처리
    // }
    console.log('response.use.error')
    console.log(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('xccc')
  },
)

module.exports = axiosInstance
