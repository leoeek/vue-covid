import { Router } from 'express'
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

export default routes;
