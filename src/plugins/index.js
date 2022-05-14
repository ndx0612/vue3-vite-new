import axios from 'axios'

const API = {
  get: axios.create({
    baseURL: 'http://api.tianapi.com',
    method: 'get',
    params: {
      key: 'c498f8d96e8d9ad2368513957311caf3'
    }
  })
}

export default API;