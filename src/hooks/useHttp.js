import axios from 'axios'

export const useHttp = axios.create({
  baseURL: 'http://localhost:8000',
})
