import express from 'express'
import { addStudent, deleteStudent } from '../controllers/student'

const router = express.Router()

router
  .post('/api/students', addStudent)
  .delete('api/students/:studentId', deleteStudent)

export { router as studentRouter }
