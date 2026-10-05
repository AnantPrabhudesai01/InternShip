import Counter from './components/Counter.jsx'
import Toggle from './components/Toggle.jsx'
import NameForm from './components/NameForm.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: 24, display: 'grid', gap: 16 }}>
      <h1>DAY03 — useState Practice</h1>
      <p>4 small examples: number, boolean, string, array.</p>
      <Counter />
      <Toggle />
      <NameForm />
      <TodoList />
    </main>
  )
}

export default App
