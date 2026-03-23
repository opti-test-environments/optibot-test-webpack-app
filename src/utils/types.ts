export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'viewer'
  active: boolean
  createdAt: Date
  revenue: number
}

export interface Activity {
  userName: string
  action: string
  timestamp: Date
}
// v2
// v3
