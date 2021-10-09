import { Request, Response } from 'express'
import { Student } from '../entities/Student'
import { Teacher } from '../entities/Teacher'
import { Contact } from '../entities/Contact'

export const addTeacherContact = async (req: Request, res: Response) => {
  const { teacherId } = req.params
  const { email, phoneNumber, address } = req.body

  const teacher = await Teacher.findOne(parseInt(teacherId))

  if (!teacher) {
    return res.json({
      message: 'Teacher not found'
    })
  }

  const contact = Contact.create({
    email,
    phoneNumber,
    address
  })
  await contact.save()

  teacher.contact = contact
  await teacher.save()

  return res.json({ teacher })
}

export const deleteTeacherContact = async (req: Request, res: Response) => {
  const { teacherContactId } = req.params
  const response = await Contact.delete(parseInt(teacherContactId))
  return res.json(response)
}

export const addStudentContact = async (req: Request, res: Response) => {
  const { studentId } = req.params
  const { email, phoneNumber, address } = req.body

  const student = await Student.findOne(parseInt(studentId))

  if (!student) {
    return res.json({
      message: 'Student not found'
    })
  }

  const contact = Contact.create({
    email,
    phoneNumber,
    address
  })
  await contact.save()

  student.contact = contact
  await student.save()

  return res.json({ student })
}

export const deleteStudentContact = async (req: Request, res: Response) => {
  const { studentContactId } = req.params
  const response = await Contact.delete(parseInt(studentContactId))
  return res.json(response)
}

// TODO: fetch, update
