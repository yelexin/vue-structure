import config from '../config/config'
import axios from 'axios'

export default function request(url, options) {
  url = config.host + url
  switch(options.method) {
    case 'GET':
      console.log(options)
      return axios.get(url, {params: options.body})
    case 'POST':
      return axios.post(url, options.body)
    case 'DELETE':
      return axios.delete(url, {data: options.body})
    case 'PUT':
      return axios.put(url, options.body)
    default:
      throw new Error('unknown request method!')
  }
}
