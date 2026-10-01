import { useState } from 'react'

export default function NameForm() {
  const [name, setName] = useState('')

  return (
    <div style={{ border: '1px solid #333', padding: 16, borderRadius: 8 }}>
      <h3>3. Input — string state</h3>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name ? `Hello, ${name}!` : 'Type above to see live update.'}</p>
    </div>
  )
}
