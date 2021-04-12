import http from 'http'
import routes from './routes/router.js'

const PORT = 3000
const DEFAULT_TYPE = {
  'Content-Type': 'application/json'
}

const handleError = response => {
  console.log('oi')
  return error => {
      console.error('A casa caiuuuu***', error)
      response.writeHead(500, DEFAULT_TYPE)
      response.write(JSON.stringify({ error: 'Internal Server Error!' }))

      return response.end()
  }
}

const handler = (request, response) => {
  const { url, method } = request
  const [first, route, id] = url.split('/')
  request.queryString = { id: isNaN(id) ? id : Number(id) }

  const key = `/${route}:${method.toLowerCase()}`

  response.writeHead(200, DEFAULT_TYPE)

  const chosen = routes[key] || routes.default
  return chosen(request, response) //.catch(handleError(response))
}

const app = http.createServer(handler).listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT} sim ;)`)
})
