import axios from 'axios'
import Cases from './cases'

const API_ENV = {
  production: 'https://api.brasil.io/v1/dataset/covid19',
  token: process.env.VUE_APP_TOKEN
}

const httpClient = axios.create({
  baseURL: API_ENV.production
})

httpClient.interceptors.request.use(config => {
  config.headers.common.Authorization = `Token ${API_ENV.token}`

  return config
})

export default {
  cases: Cases(httpClient)
}
