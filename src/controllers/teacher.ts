import { Request, Response } from 'express'
import { Subject } from 'src/entities/Subject'
import { Student } from '../entities/Student'
import { Teacher } from '../entities/Teacher'

export const addTeacher = async (req: Request, res: Response) => {
  const { firstName, lastName, gender, teacherId, subjectName } = req.body

  const subject = Subject.create({ subjectName })

  const teacher = Teacher.create({
    firstName,
    lastName,
    gender,
    teacherId,
    subject
  })

  await subject.save()
  await teacher.save()

  return res.json(teacher)
}

export const connectTeacherAndStudent = async (req: Request, res: Response) => {
  const { teacherId, studentId } = req.params

  const teacher = await Teacher.findOne(parseInt(teacherId))
  const student = await Student.findOne(parseInt(studentId))

  if (!teacher || !student) {
    return res.json({
      message: 'Teacher or student not found'
    })
  }

  if (!teacher.students && !student.teachers) {
    teacher.students = [student]
    await teacher.save()

    student.teachers = [teacher]
    await student.save()

    return res.json({
      message: 'Teacher and student are connected'
    })
  }

  teacher.students = [...teacher.students, student]
  await teacher.save()

  student.teachers = [...student.teachers, teacher]
  await teacher.save()

  return res.json({
    message: 'Teacher and student are connected'
  })
}

export const deleteTeacher = async (req: Request, res: Response) => {
  const { teacherId } = req.params
  const response = await Teacher.delete(parseInt(teacherId))
  return res.json(response)
}

// TODO: fetch, update
