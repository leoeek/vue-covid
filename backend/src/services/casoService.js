export default class CasoService {
  constructor({ casoRepository }) {
    this.casoRepository = casoRepository
  }

  async getAll(filter) {
    return this.casoRepository.getAll(filter)
  }

  async findCity(filter) {
    return this.casoRepository.findCity(filter)
  }
}
