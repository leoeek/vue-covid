import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default class CasoRepository {

  constructor(databaseFile) {
    this.pathDb = databaseFile
  }

  async open() {
    try {
      this.db = await open({ filename: this.pathDb, driver: sqlite3.Database})
    }
    catch (error) {
      console.log(`Error -> ${error}`)
    }
  }

  async getAll(filter) {
    if (!this.db) await this.open()

    const { state } = filter

    const lastDate = await this.db.all('SELECT MAX(date) AS date FROM casos')
    console.log('dataeeee', lastDate[0].date)
    const rows = await this.db.all(`SELECT * FROM casos WHERE state = '${state}' AND date = '${lastDate[0].date}' AND city <> '' ORDER BY city`)

    const dados = {
      results: rows
    }
    return dados
  }

  async findCity(filter) {
    if (!this.db) await this.open()

    const { city, state } = filter

    let query = ` AND lower(city) LIKE '${city.toLowerCase()}%' `
    if (state) {
      query += ` AND state = '${state}' `
    }

    console.log('query', query)

    const lastDate = await this.db.all('SELECT MAX(date) AS date FROM casos')
    const rows = await this.db.all(`SELECT * FROM casos WHERE date = '${lastDate[0].date}' ${query} ORDER BY city, state `)

    const dados = {
      results: rows
    }
    return dados
  }

}

