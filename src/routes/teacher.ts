import express from 'express'
import {
  addTeacher,
  connectTeacherAndStudent,
  deleteTeacher,
  fetchTeachers
} from '../controllers/teacher'

const router = express.Router()

router
  .post('/api/teachers', addTeacher)
  .get('/api/teachers', fetchTeachers)
  .put('/api/teachers/:teacherId/students/:studentId', connectTeacherAndStudent)
  .delete('api/teachers/:teacherId', deleteTeacher)

export { router as teacherRouter }
