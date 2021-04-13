
import Factory from '../factories/casoFactory.js'

const casoService = Factory.generateInstance()
export default class CasosController {

  async findCity(req, res) {
    const { city, state } = req.query
    const filter = {
      city,
      state
    }
    const data = await casoService.findCity(filter)
    res.json(data)
  }


}
