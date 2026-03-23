import { uniqueId, capitalize, random, sample } from 'lodash'
import { subDays } from 'date-fns'
import { User, Activity } from './types'

const FIRST_NAMES = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack']
const LAST_NAMES = ['Smith', 'Jones', 'Brown', 'Wilson', 'Taylor', 'Clark', 'Hall', 'Lee', 'King', 'Green']
const ROLES: User['role'][] = ['admin', 'user', 'viewer']
const ACTIONS = ['logged in', 'updated profile', 'created a report', 'deleted a file', 'shared a document', 'invited a user']

export function generateUsers(count: number): User[] {
  return Array.from({ length: count }, () => {
    const first = sample(FIRST_NAMES) ?? 'User'
    const last = sample(LAST_NAMES) ?? 'Doe'
    return {
      id: uniqueId('user-'),
      name: `${capitalize(first)} ${capitalize(last)}`,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
      role: sample(ROLES) ?? 'user',
      active: Math.random() > 0.3,
      createdAt: subDays(new Date(), random(1, 365)),
      revenue: random(100, 10000),
    }
  })
}

export function generateActivities(users: User[], count: number): Activity[] {
  return Array.from({ length: count }, () => ({
    userName: (sample(users) ?? users[0]).name,
    action: sample(ACTIONS) ?? 'performed an action',
    timestamp: subDays(new Date(), random(0, 7)),
  }))
}
