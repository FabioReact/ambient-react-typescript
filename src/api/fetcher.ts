import axios from 'axios'

const fetcher = {
  get(url: string) {
    return axios.get(url).then((response) => response.data)
  },
}

export { fetcher }
