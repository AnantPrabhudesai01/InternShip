import {useState} from 'react';

export default function App(){
  const [samples,setSamples] = useState([]);
  const [form,setForm] = useState({id: '',customer: '',test:''})
  const [error,setError] = useState('');


  const add = (e) =>{
    e.preventDefault();
    if(!form.id.trim()) return setError('ID IS REQUIRED')
    if(samples.find((s)=>s.id === form.id.trim())) return setError('ID ALREADY EXISTS')
    setSamples([...samples,{...form,id: form.id.trim(),status: 'REGISTERED'}])
    setForm({id: '',customer: '',test:''})

  }

return (
  <div style={{ padding: '20px' }}>
    <h1>Sample Tracker</h1>
    {error && <div style={{ background: '#fee', border: '1px solid red', padding: 8 }}>{error} <button onClick={() => setError('')}>X</button></div>}
    <form onSubmit={add}>
      <input placeholder="SMP-000471" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} />
      <input placeholder-="Customer" value={form.customer} onChange = {e => setForm({...form,customer: e.target.value})}/>
      <input placeholder="Test" value={form.test} onChange = {e => setForm({...form,test: e.target.value})}/>
      <button>Add Sample</button>
    </form>
    <ul>
      {samples.map(s => (
        <li key={s.id}>{s.id} - {s.status}</li>
      ))}
    </ul>
  </div>
)}