import express from 'express'
import { json } from 'body-parser'
import { studentRouter } from './routes/student'
import { teacherRouter } from './routes/teacher'
import { contactRouter } from './routes/contact'

export const app = express()
app.use(json())

app.use(studentRouter)
app.use(teacherRouter)
app.use(contactRouter)
