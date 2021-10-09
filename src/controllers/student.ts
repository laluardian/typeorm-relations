import { Request, Response } from 'express'
import { Student } from '../entities/Student'

export const addStudent = async (req: Request, res: Response) => {
  const { firstName, lastName, gender, studentId } = req.body

  const student = Student.create({
    firstName,
    lastName,
    gender,
    studentId
  })
  await student.save()

  return res.json(student)
}

export const deleteStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params
  const response = await Student.delete(parseInt(studentId))
  return res.json(response)
}

// TODO: fetch, update
