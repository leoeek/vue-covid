import express from 'express'
import cors from 'cors'
import routes from './routes/router.js'

const app = express()
const PORT = 3400
const DEFAULT_TYPE = {
  'Content-Type': 'application/json'
}

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT} sim ;)`)
})
