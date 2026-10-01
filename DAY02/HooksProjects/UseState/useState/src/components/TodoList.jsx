import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState(['Learn useState'])
  const [input, setInput] = useState('')

  function addTodo() {
    const text = input.trim()
    if (!text) return
    setTodos((prev) => [...prev, text])
    setInput('')
  }

  return (
    <div style={{ border: '1px solid #333', padding: 16, borderRadius: 8 }}>
      <h3>4. List — array state</h3>
      <input
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTodo()
        }}
      />{' '}
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
