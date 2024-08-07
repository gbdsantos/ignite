import {
  Notification,
  NotificationProps,
} from '@/domain/notification/enterprise/entities/notification'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

import { faker } from '@faker-js/faker'

export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityID,
) {
  const notification = Notification.create(
    {
      title: faker.lorem.sentence(4),
      recipientId: new UniqueEntityID(),
      content: faker.lorem.sentence(10),
      ...override,
    },
    id,
  )

  return notification
}
