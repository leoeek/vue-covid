import express from 'express'
import cors from 'cors'
import routes from './routes/router.js'

const app = express()
const PORT = 3000
const DEFAULT_TYPE = {
  'Content-Type': 'application/json'
}

app.use(cors())
app.use(express.json())
app.use(routes)

// const handleError = response => {
//   return error => {
//       console.error('A casa caiuuuu***', error)
//       response.writeHead(500, DEFAULT_TYPE)
//       response.write(JSON.stringify({ error: 'Internal Server Error!' }))

//       return response.end()
//   }
// }

// const handler = (request, response) => {
//   const { url, method } = request
//   const [first, route, id] = url.split('/')
//   request.queryString = { id: isNaN(id) ? id : Number(id) }

//   const key = `/${route}:${method.toLowerCase()}`

//   response.setHeader("Access-Control-Allow-Origin", "*")
//   response.writeHead(200, DEFAULT_TYPE)

//   const chosen = routes[key] || routes.default
//   return chosen(request, response) //.catch(handleError(response))
// }

app.listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT} sim ;)`)
})
