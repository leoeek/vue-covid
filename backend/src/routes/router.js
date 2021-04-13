import Factory from '../factories/casoFactory.js'

const casoService = Factory.generateInstance()

const routes = {
  '/teste:get': (request, response) => {

    const data = {
      msg: 'Olá mundo'
    }
    response.write(JSON.stringify(data))
    return response.end()
  },

  '/casos:get': async (request, response) => {

    const { id } = request.queryString
    const filter = {
      state: id.toUpperCase()
    }
    const data = await casoService.getAll(filter)

    response.write(JSON.stringify(data))
    return response.end()
  },

  default: (request, response) => {
    response.write('Hello World!')
    return response.end()
  }
}

export default routes;
