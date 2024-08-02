import { Student } from '@/domain/forum/enterprise/entities/student'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { DomainEvents } from '@/core/events/domain-events'

export class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = []

  async create(student: Student) {
    this.items.push(student)

    DomainEvents.dispatchEventsForAggregate(student.id)
  }

  async findByEmail(email: string) {
    const student = this.items.find((item) => item.email.toString() === email)

    if (!student) {
      return null
    }

    return student
  }
}
