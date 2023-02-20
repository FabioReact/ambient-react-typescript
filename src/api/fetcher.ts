const fetcher = {
  get(url: string) {
    return fetch(url).then((response) => response.json())
  },
}

export { fetcher }
