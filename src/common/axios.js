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
    // TODO response 객체 없을 수도 있으니 lcs에 맞춰달라고 해야함
    return Promise.reject(new Error(error.response.data))
  },
)

const sendRequest = async (_sqlcmd, _params) => {
  const networkInterfaces = os.networkInterfaces()

  let result
  try {
    const { address } = networkInterfaces['이더넷'][1]
    result = await axiosInstance.post('', {
      sqlcmd: _sqlcmd + process.env.NODE_ENV_PROC,
      params: [
        [
          'ip',
          'nvarchar',
          'input',
          address,
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
    result = JSON.parse(result.data.params.json_result)
  } catch (err) {
    // console.error(err)
    result = String(err)
  }
  return result
}
const sendRequestToLcs = async (_url, _params) => {
  let result
  try {
    result = await axiosInstance.post(_url, _params, {
      baseURL: process.env.NODE_ENV_LCS_URL,
    })
  } catch (err) {
    // console.error(err)
    result = String(err)
  }
  return result
}

module.exports = { ...axiosInstance, sendRequest, sendRequestToLcs }
