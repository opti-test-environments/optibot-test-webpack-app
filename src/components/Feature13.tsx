import React, { useState, useEffect } from 'react'
import { groupBy, sortBy, uniqBy, flatten, chunk } from 'lodash'
import { format, subDays, addHours, differenceInMinutes } from 'date-fns'

interface Feature13Props { data: Array<{ id: number, value: string, ts: Date }> }

function process13(items: Array<{ id: number, value: string, ts: Date }>) {
  const grouped = groupBy(items, i => format(i.ts, 'yyyy-MM'))
  const sorted = sortBy(Object.entries(grouped), ([k]) => k)
  return sorted.map(([month, vals]) => ({
    month,
    items: uniqBy(vals, 'id'),
    chunks: chunk(vals, 5),
    range: vals.length > 0 ? differenceInMinutes(vals[vals.length-1].ts, vals[0].ts) : 0,
  }))
}

export function Feature13({ data }: Feature13Props) {
  const [result, setResult] = useState<ReturnType<typeof process13>>([])
  useEffect(() => { setResult(process13(data)) }, [data])
  const dates = Array.from({length: 10}, (_, j) => addHours(subDays(new Date(), j), j))
  return (
    <div className="card">
      <h3>Feature 13</h3>
      <p>{result.length} months, {flatten(result.map(r => r.items)).length} unique items</p>
      <ul>{dates.map((d, j) => <li key={j}>{format(d, 'PPpp')}</li>)}</ul>
    </div>
  )
}
