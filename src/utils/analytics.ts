import { sumBy, groupBy } from 'lodash'
import { format, subMonths } from 'date-fns'
import { User } from './types'

interface Stats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  monthlyData: Array<{ month: string; value: number }>
}

export function computeStats(users: User[]): Stats {
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const date = subMonths(new Date(), 5 - i)
    const month = format(date, 'MMM')
    const byMonth = groupBy(users, u => format(u.createdAt, 'MMM'))
    return { month, value: (byMonth[month] ?? []).length }
  })

  return {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.active).length,
    totalRevenue: sumBy(users, 'revenue'),
    monthlyData,
  }
}
