import csv from 'csv-parser'
import fs from 'fs'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function main() {
  const { pathname: databaseFile } = new URL('../../datasets/caso_full.csv', import.meta.url)

  try {

    const db = await open({ filename: './caso_full.db', driver: sqlite3.Database })

    // await db.serialize(function() {
      // id INTEGER PRIMARY KEY AUTOINCREMENT,
      const sql = `
        CREATE TABLE IF NOT EXISTS casos (
          city TEXT,
          city_ibge_code TEXT,
          date DATE,
          epidemiological_week TEXT,
          estimated_population TEXT,
          estimated_population_2019 TEXT,
          is_last TEXT,
          is_repeated TEXT,
          last_available_confirmed INTEGER,
          last_available_confirmed_per_100k_inhabitants TEXT,
          last_available_date TEXT,
          last_available_death_rate TEXT,
          last_available_deaths INTEGER,
          order_for_place INTEGER,
          place_type TEXT,
          state TEXT,
          new_confirmed INTEGER,
          new_deaths INTEGER
        )
      `
      await db.run(sql);

      //let stmt = db.prepare('INSERT INTO casos VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');

      let rstream = fs.createReadStream(databaseFile).pipe(csv())
      rstream.on('data', async (row) => {

          if (row.city == '') return

          console.log('row', row.city)

          const {
            city,
            city_ibge_code,
            date,
            epidemiological_week,
            estimated_population,
            estimated_population_2019,
            is_last,
            is_repeated,
            last_available_confirmed,
            last_available_confirmed_per_100k_inhabitants,
            last_available_date,
            last_available_death_rate,
            last_available_deaths,
            order_for_place,
            place_type,
            state,
            new_confirmed,
            new_deaths
          } = row

          // stmt.run(
          const result = await db.run(`INSERT INTO casos VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
              city,
              city_ibge_code,
              date,
              epidemiological_week,
              estimated_population,
              estimated_population_2019,
              is_last,
              is_repeated,
              last_available_confirmed,
              last_available_confirmed_per_100k_inhabitants,
              last_available_date,
              last_available_death_rate,
              last_available_deaths,
              order_for_place,
              place_type,
              state,
              new_confirmed,
              new_deaths
            ],
          )

          if (result) {
            return console.log(`Linha inserida -> ${result.lastID}`)
          }

          console.log(`OPS! DEU BO, NÃO FOI INSERIDO!`)
      })

      rstream.on('end', () => {
        console.log('CSV LIDO COM SATISFAÇÃO ASPIRA')
      })

      // stmt.finalize();

      console.log('FINALIZADO')
      // db.each("SELECT id, city FROM casos", function(err, row) {
      //     console.log(row);
      // });
    // });


  // db.close();

  } catch (error) {
    console.log(`Ops, error ${erro}`)
  }

}

main()
