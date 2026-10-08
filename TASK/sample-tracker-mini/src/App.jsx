import {useState,useEffect} from 'react';


export default function App(){
  const [samples,setSamples] = useState([]);
  const [form,setForm] = useState({id: '',customer: '',test:'',result: '',spec: ''});
  const [error,setError] = useState('');


const isOOS = (r,s) => r!== '' && s !== '' && Number(r) < Number(s);

useEffect(()=>{fetch('http://localhost:5000/samples').then((r=>r.json())).then(setSamples)},[])


  const add = async (e) =>{
    e.preventDefault();
    if(!form.id.trim()) return setError('ID IS REQUIRED')
    if(samples.find((s)=>s.id === form.id.trim())) return setError('ID ALREADY EXISTS')
    setError('')
    const rec = {...form,id:form.id.trim(),status:'REGISTERED'}
    await fetch('http://localhost:5000/samples',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(rec)})
    setSamples([...samples,rec])
        setForm({id: '',customer: '',test:'',result: '',spec: ''})

  }

return (
  <div style={{ padding: '20px' }}>
    <h1>Sample Tracker</h1>
    {error && <div style={{ background: '#fee', border: '1px solid red', padding: 8 }}>{error} <button onClick={() => setError('')}>X</button></div>}
    <form onSubmit={add}>
      <input placeholder="SMP-000471" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} />
      <input placeholder="Customer" value={form.customer} onChange = {e => setForm({...form,customer: e.target.value})}/>
      <input placeholder="Test" value={form.test} onChange = {e => setForm({...form,test: e.target.value})}/>
      <input placeholder="Result" value={form.result} onChange = {e => setForm({...form,result: e.target.value})}/>
      <input placeholder="Spec" value={form.spec} onChange = {e => setForm({...form,spec: e.target.value})}/>
          <button>Add Sample</button>
    </form>
    <ul>
      {samples.map(s => 
<li key={s.id}>{s.id} - R:{s.result}/S:{s.spec} - {s.status} {isOOS(s.result,s.spec) ? '🔴 OOS HOLD' : '🟢 PASS'} <button disabled={isOOS(s.result,s.spec)}>Approve</button></li>
      )}
    </ul>
  </div>
)}