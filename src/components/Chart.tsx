import React from 'react'

interface MonthlyData { month: string; value: number }
interface Props { data: MonthlyData[] }

export function Chart({ data }: Props) {
  const max = Math.max(...data.map(d => d.value), 1)
  return (
    <div className="card">
      <h3>Monthly Trend</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 120, marginTop: '1rem' }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ background: '#0066ff', height: `${(d.value / max) * 100}px`, borderRadius: 4 }} />
            <div style={{ fontSize: '0.7rem', color: '#999', marginTop: 4 }}>{d.month}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
