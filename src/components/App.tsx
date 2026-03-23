import React, { useState } from 'react'
import { Header } from './Header'
import { Dashboard } from './Dashboard'
import { UserList } from './UserList'
import { ActivityFeed } from './ActivityFeed'
import { Settings } from './Settings'
import { generateUsers } from '@utils/data'

type Page = 'dashboard' | 'users' | 'activity' | 'settings'

export function App() {
  const [page, setPage] = useState<Page>('dashboard')
  const users = generateUsers(50)

  return (
    <div className="app">
      <Header currentPage={page} onNavigate={setPage} />
      {page === 'dashboard' && <Dashboard users={users} />}
      {page === 'users' && <UserList users={users} />}
      {page === 'activity' && <ActivityFeed users={users} />}
      {page === 'settings' && <Settings />}
    </div>
  )
}
