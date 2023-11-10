import axios from "axios";

export const request = axios.create({
  baseURL: '/local',
  timeout: 8000
});

// 异常拦截处理器
const errorHandler = (error) => {
  console.log('异常拦截处理器------', error.response)
  if (error.response) {
    const data = error.response.data
    const errMsg = error.response.statusText
    // 从 localstorage 获取 token
    if (error.response.status === 400) {
      notification.error({
        message: '接口错误',
        description: data.message || errMsg,
      })
    }
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message || errMsg,
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed' || errMsg,
      })
    }
    if (error.response.status === 401) {
      storage.remove(ACCESS_TOKEN)
      const backtoUrl = encodeURIComponent(router.currentRoute.fullPath)
      router.push('/login?redirect=' + backtoUrl)
    }
  }
  return Promise.reject(error)
}



//请求拦截器
request.interceptors.request.use((config) => {

  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, errorHandler);


//响应拦截器
request.interceptors.response.use((response) => {
  // console.log('接口请求路径------', response.config.url)
  // console.log('接口返回数据------', response.data)

  // if (response.data.code == 401) {
  //   router.push('/login')
  // }
  return response.data
}, errorHandler)

export const APIrequest = axios.create({
  baseURL: 'http://172.20.10.3:8080',
  timeout: 8000
})

//请求拦截器
APIrequest.interceptors.request.use((config) => {

  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  // if (token) {
  //   config.headers['Access-Token'] = token
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config;
}, errorHandler);


//响应拦截器
APIrequest.interceptors.response.use((response) => {
  // console.log('接口请求路径------', response.config.url)
  // console.log('接口返回数据------', response.data)

  // if (response.data.code == 401) {
  //   router.push('/login')
  // }
  return response.data
}, errorHandler)





