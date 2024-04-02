// eslint-disable-next-line no-unused-vars
const os = require('os')
const axios = require('axios')

const defaultOptions = {
  // baseURL: 'http://211.172.242.188:8003/executeDBQuery',
  baseURL: process.env.NODE_ENV_WEBQUERY_URL || 'http://localhost:8008/executeDBQuery',
  timeout: 10000,
}

const axiosInstance = axios.create(defaultOptions)
// const networkInterfaces = os.networkInterfaces()

axiosInstance.interceptors.request.use((config) => {
  // 요청 전 처리
  // config.headers['Authorization'] = `Bearer ${token}`;
  // console.dir(config)
  return config
}, (error) => {
  // console.trace(error)
})

axiosInstance.interceptors.response.use(
  (response) => {
    // console.dir(response)
    return response
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   // 로그아웃 처리
    // }
    // return Promise.reject(new Error(error))
    return Promise.reject(new Error(error.response.data))
  },
)

const sendRequest = async (_sqlcmd, _params) => {
  // const networkInterfaces = os.networkInterfaces()
  // const serverIP = networkInterfaces.eth0[0].address

  let result
  try {
    result = await axiosInstance.post('', {
      sqlcmd: _sqlcmd + process.env.NODE_ENV_PROC,
      params: [
        [
          'ip',
          'nvarchar',
          'input',
          '111.222.10.1',
        ],
        [
          'json',
          'nvarchar',
          'input',
          JSON.stringify(_params),
        ],
        [
          'json_result',
          'nvarchar',
          'output',
          '',
        ],
      ],
    })
  } catch (err) {
    // console.error(err)
    result = String(err)
  }
  return result
}
const sendRequestToLcs = (_url, _params) =>
  axiosInstance.post(_url, _params, { baseURL: process.env.NODE_ENV_LCS_URL })
    .then((response) => {
      // console.dir(response)
      return response.data
    })

module.exports = { ...axiosInstance, sendRequest, sendRequestToLcs }
