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
  getDetail: async ({ limit, offset, state, date } = defaultPagination) => {
    const query = { limit, offset, state, date }
    const response = await httpClient.get('/caso_full/data', { params: query })
    return { data: response.data }
  }
})
