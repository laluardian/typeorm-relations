import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('contact_info')
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true
  })
  email: string

  @Column({ name: 'phone_number', type: 'numeric' })
  phoneNumber: string

  @Column()
  address: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
