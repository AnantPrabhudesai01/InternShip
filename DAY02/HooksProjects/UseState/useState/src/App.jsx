import { useState } from 'react';
import { seedExpenses,categories } from './data/seedExpenses.js';
// import { seedExpenses } from './data/seedExpenses.js';
import ExpenseForm from './components/ExpenseForm.jsx';




export default function App() {
  const [expenses, setExpenses] = useState(seedExpenses);
  const [category,setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sortKey,setSortKey]= useState('newest');

  function handleAdd(newExpense){
    setExpenses((prev) => [newExpense, ...prev])
  }

    function handleDelete(id) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }
 
  // const filtered = expenses.filter((e) =>
  //   e.title.toLowerCase().includes(search.toLowerCase())
  // );

  const filtered = expenses.filter(
    (e)=>e.title.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || e.category === category))
  ;

  const sorted = [...filtered].sort((a,b)=>{
    if(sortKey === 'high') return b.amount - a.amount;
    if(sortKey=== 'low') return a.amount - b.amount;
    if(sortKey=== 'oldest') return a.date.localeCompare(b.date);
           return b.date.localeCompare(a.date);
   })
  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: 24 }}>
      <h1>SpendLog</h1>
      <ExpenseForm onAdd={handleAdd}/>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="high">Amount high</option>
        <option value="low">Amount low</option>
      </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <p>Total: Rs {total} | Count: {sorted.length}</p>
      {sorted.length === 0 ? (
        <p>No matches. Clear search.</p>
      ) : (
        <ul>
          {sorted.map((e) => (
         <li key={e.id}>
              {e.title} - Rs {e.amount} - {e.category} - {e.date}{' '}
              <button type="button" onClick={() => handleDelete(e.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}