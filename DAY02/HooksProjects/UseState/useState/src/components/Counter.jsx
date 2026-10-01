import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: '1px solid #333', padding: 16, borderRadius: 8 }}>
      <h3>1. Counter — number state</h3>
      <p>Count is {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>{' '}
      <button type="button" onClick={() => setCount((c) => c - 1)}>
        -1
      </button>{' '}
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}
