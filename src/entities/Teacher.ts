import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne
} from 'typeorm'
import { Student } from './Student'
import { Subject } from './Subject'
import { Person } from './utils/Person'

@Entity('teacher')
export class Teacher extends Person {
  @Column({ name: 'teacher_id' })
  teacherId: string

  @ManyToOne(() => Subject, subject => subject.teachers)
  @JoinColumn({
    name: 'teaching_subject_id'
  })
  subject: Subject

  @ManyToMany(() => Student, student => student.teachers)
  @JoinTable({
    joinColumn: {
      name: 'teacher_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'student_id',
      referencedColumnName: 'id'
    }
  })
  students: Student[]
}
