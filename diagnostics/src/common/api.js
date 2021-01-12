import axios from 'axios'

const apiBase = axios.create({
  baseURL: 'http://localhost:8001/api/v1/diagnostics/',
})

export const getTests = () => apiBase.get('/tests')

export const runTest = (route) => apiBase.post(route)
