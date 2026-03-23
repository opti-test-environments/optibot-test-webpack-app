import React, { useState } from 'react'

export function Settings() {
  const [theme, setTheme] = useState('light')
  const [notifications, setNotifications] = useState(true)
  return (
    <div>
      <h2>Settings</h2>
      <div className="card">
        <label>Theme: </label>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="card">
        <label>
          <input type="checkbox" checked={notifications} onChange={e => setNotifications(e.target.checked)} />
          {' '}Enable notifications
        </label>
      </div>
    </div>
  )
}
