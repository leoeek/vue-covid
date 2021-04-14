const defaultPagination = {
  limit: 20,
  offset: 0
}

export default httpClient => ({
  getAll: async ({ type, limit, offset } = defaultPagination) => {
    const query = { limit, offset }
    if (type) {
      query.type = type
    }

    const response = await httpClient.get('/caso/data', { params: query })
    return { data: response.data }
  },
  getDetail: async ({ state } = defaultPagination) => {
    // const query = { limit, offset, state, date }
    const { data } = await httpClient.get(`/casos/${state}`)
    return { data }
  },
  findCity: async ({ city, state } = defaultPagination) => {
    const query = {
      city: city
    }
    if (state) {
      query.state = state
    }
    const { data } = await httpClient.get('/casos', { params: query })
    return { data }
  }
})
