import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { Contact } from '../Contact'

export enum GenderTypes {
  MALE = 'male',
  FEMALE = 'female'
}

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'first_name' })
  firstName: string

  @Column({ name: 'last_name' })
  lastName: string

  @Column({
    type: 'enum',
    enum: GenderTypes
  })
  gender: string

  @OneToOne(() => Contact)
  @JoinColumn({
    name: 'contact_id',
    referencedColumnName: 'id'
  })
  contact: Contact

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
