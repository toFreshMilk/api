const axios = require('axios');

const defaultOptions = {
  baseURL: 'http://211.172.242.188:8003/executeDBQuery',
  timeout: 10000,
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use((config) => {
  // config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // if (error.response && error.response.status === 401) {
  //   // 로그아웃 처리
  // }
  return Promise.reject(error);
});

module.exports = axiosInstance;
