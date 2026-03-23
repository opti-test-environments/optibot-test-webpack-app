import React from 'react'
import { User } from '@utils/types'
import { generateActivities } from '@utils/data'
import { formatRelativeTime } from '@utils/helpers'

interface Props { users: User[] }

export function ActivityFeed({ users }: Props) {
  const activities = generateActivities(users, 30)
  return (
    <div>
      <h2>Recent Activity</h2>
      {activities.map((a, i) => (
        <div key={i} className="card">
          <strong>{a.userName}</strong> {a.action}
          <div style={{ color: '#999', fontSize: '0.85rem' }}>{formatRelativeTime(a.timestamp)}</div>
        </div>
      ))}
    </div>
  )
}
