import { format, formatDistanceToNow } from 'date-fns'
import { orderBy } from 'lodash'
import { User } from './types'

export function formatDate(date: Date): string {
  return format(date, 'MMM d, yyyy')
}

export function formatRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true })
}

export function sortUsers(users: User[], by: 'name' | 'date'): User[] {
  if (by === 'name') return orderBy(users, ['name'], ['asc'])
  return orderBy(users, ['createdAt'], ['desc'])
}
