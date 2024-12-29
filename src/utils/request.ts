import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface ResponseData<T = any> {
  code: number
  data: T
  message: string
}

class Request {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse<ResponseData>) => {
        const res = response.data
        if (res.code !== 200) {
          return Promise.reject(new Error(res.message || '请求错误'))
        }
        return res
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }
}

export default new Request({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 5000
}) 