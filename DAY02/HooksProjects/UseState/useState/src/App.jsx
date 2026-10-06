import { useState } from 'react';
import { seedExpenses } from './data/seedExpenses.js';

export default function App() {
  const [expenses, setExpenses] = useState(seedExpenses);
  const [search, setSearch] = useState('');

  const filtered = expenses.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: 24 }}>
      <h1>SpendLog</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Total: Rs {total} | Count: {filtered.length}</p>
      {filtered.length === 0 ? (
        <p>No matches. Clear search.</p>
      ) : (
        <ul>
          {filtered.map((e) => (
            <li key={e.id}>
              {e.title} - Rs {e.amount} - {e.category} - {e.date}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}