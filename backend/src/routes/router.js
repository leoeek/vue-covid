import { request, response, Router } from 'express'
import CasosController from '../controller/casos.js'

const routes = new Router()

routes.get('/teste', (request, response) => {
  const caso = new CasosController()
  caso.index(request, response)
})

routes.get('/casos', (request, response) => {
  const caso = new CasosController()
  caso.findCity(request, response)
})

// const routes = {
//   '/teste:get': (request, response) => {
//     const data = {
//       msg: 'Olá mundo'
//     }
//     response.write(JSON.stringify(data))
//     return response.end()
//   },

//   '/casos:get': async (request, response) => {
//     const { id } = request.queryString
//     const filter = {
//       state: id.toUpperCase()
//     }
//     const data = await casoService.getAll(filter)

//     response.write(JSON.stringify(data))
//     return response.end()
//   },

//   '/city:get': async (request, response) => {
//     console.log('aqui', request.queryString)
//     return response.end()

//     const { id } = request.queryString
//     const filter = {
//       city: id
//     }
//     console.log('pesquisa', id)
//     const data = await casoService.findCity(filter)

//     response.write(JSON.stringify(data))
//     return response.end()
//   },

//   default: (request, response) => {
//     response.write('Hello World!')
//     return response.end()
//   }
// }

export default routes;
