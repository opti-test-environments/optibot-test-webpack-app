import React from 'react'
import { User } from '@utils/types'
import { computeStats } from '@utils/analytics'
import { StatsCard } from './StatsCard'
import { Chart } from './Chart'

interface Props { users: User[] }

export function Dashboard({ users }: Props) {
  const stats = computeStats(users)
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="stats">
        <StatsCard label="Total Users" value={stats.totalUsers} />
        <StatsCard label="Active" value={stats.activeUsers} />
        <StatsCard label="Revenue" value={`$${stats.totalRevenue.toFixed(0)}`} />
      </div>
      <Chart data={stats.monthlyData} />
    </div>
  )
}
