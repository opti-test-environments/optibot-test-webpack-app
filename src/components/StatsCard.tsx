import React from 'react'

interface Props { label: string; value: string | number }

export function StatsCard({ label, value }: Props) {
  return (
    <div className="card" style={{ textAlign: 'center', minWidth: 150 }}>
      <div className="stat-value">{value}</div>
      <div style={{ color: '#666' }}>{label}</div>
    </div>
  )
}
