import { Entity, Column, ManyToMany } from 'typeorm'
import { Teacher } from './Teacher'
import { Person } from './utils/Person'

@Entity('student')
export class Student extends Person {
  @Column({ name: 'student_id', length: 8 })
  studentId: string

  // bi-directional many-to-many relationship
  @ManyToMany(() => Teacher, teacher => teacher.students)
  teachers: Teacher[]
}
