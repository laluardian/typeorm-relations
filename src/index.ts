if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import { createConnection } from 'typeorm'
import { app } from './app'
import { Contact } from './entities/Contact'
import { Student } from './entities/Student'
import { Subject } from './entities/Subject'
import { Teacher } from './entities/Teacher'

const main = async () => {
  if (!process.env.POSTGRES_URI) {
    console.log('POSTGRES_URI must be defined')
  }

  if (!process.env.PORT) {
    console.log('PORT must be defined')
  }

  try {
    await createConnection({
      type: 'postgres',
      url: process.env.POSTGRES_URI,
      entities: [Student, Teacher, Contact, Subject],
      synchronize: true
    })
    console.log('Connected to database')
  } catch (err) {
    console.error(err)
  }

  app.listen(process.env.PORT, () => {
    console.log('Listening on port %s', process.env.PORT)
  })
}

main()
