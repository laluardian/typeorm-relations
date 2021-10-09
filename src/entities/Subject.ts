import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Teacher } from './Teacher'

export enum SubjectList {
  SCIENCE = 'science',
  MATH = 'mathematics',
  HISTORY = 'history',
  LIT = 'literature',
  ART = 'art',
  PHYSICAL = 'physical education'
}

@Entity('subject')
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'subject_name',
    type: 'enum',
    enum: SubjectList
  })
  subjectName: string

  @OneToMany(() => Teacher, teacher => teacher.subject)
  teachers: Teacher[]
}
