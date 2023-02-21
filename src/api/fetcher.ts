import axios from 'axios'

const fetcher = {
  get(url: string) {
    return axios.get(url).then((response) => response.data)
  },
  post(url: string, data: unknown) {
    return axios.post(url, data)
  },
}

export { fetcher }
