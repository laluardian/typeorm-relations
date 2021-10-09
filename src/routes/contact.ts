import express from 'express'
import { addTeacherContact, addStudentContact } from '../controllers/contact'

const router = express.Router()

router
  .post('/api/teachers/:teacherId/contact', addTeacherContact)
  .post('/api/students/:studentId/contact', addStudentContact)
  .delete(
    '/api/teachers/:teacherId/contact/:teacherContactId',
    addStudentContact
  )
  .delete(
    '/api/students/:studentId/contact/:studentContactId',
    addStudentContact
  )

export { router as contactRouter }
