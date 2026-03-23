import React from 'react'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: 'dashboard' | 'users' | 'activity' | 'settings') => void
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const pages = ['dashboard', 'users', 'activity', 'settings'] as const
  return (
    <div className="header">
      <h1>Webpack Test App</h1>
      <nav style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        {pages.map(p => (
          <button key={p} className="btn" onClick={() => onNavigate(p)}
            style={{ opacity: currentPage === p ? 1 : 0.7 }}>{p}</button>
        ))}
      </nav>
    </div>
  )
}
