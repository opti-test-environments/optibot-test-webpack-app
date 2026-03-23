import React, { useState } from 'react'
import { User } from '@utils/types'
import { formatDate, sortUsers } from '@utils/helpers'

interface Props { users: User[] }

export function UserList({ users }: Props) {
  const [sortBy, setSortBy] = useState<'name' | 'date'>('name')
  const sorted = sortUsers(users, sortBy)
  return (
    <div>
      <h2>Users ({users.length})</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button className="btn" onClick={() => setSortBy('name')}>Sort by Name</button>{' '}
        <button className="btn" onClick={() => setSortBy('date')}>Sort by Date</button>
      </div>
      {sorted.map(u => (
        <div key={u.id} className="card">
          <strong>{u.name}</strong> — {u.email}
          <div style={{ color: '#666', fontSize: '0.9rem' }}>Joined {formatDate(u.createdAt)}</div>
        </div>
      ))}
    </div>
  )
}
