import { useState } from 'react'

export default function Toggle() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ border: '1px solid #333', padding: 16, borderRadius: 8 }}>
      <h3>2. Toggle — boolean state</h3>
      <button type="button" onClick={() => setShow((s) => !s)}>
        {show ? 'Hide' : 'Show'} text
      </button>
      {show && <p>Hello! I am visible because show = true.</p>}
    </div>
  )
}
