import CasoRepository from '../repositories/casoRepository.js'
import CasoService from '../services/casoService.js'

const generateInstance = () => {
  const { pathname: databaseFile } = new URL('../../covid19.db', import.meta.url)

  const casoRepository = new CasoRepository(databaseFile)
  const casoService = new CasoService({ casoRepository })

  return casoService;
}

export default { generateInstance }
