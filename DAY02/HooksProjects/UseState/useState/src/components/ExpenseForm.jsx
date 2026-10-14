import {useState} from 'react';


export default function ExpenseForm({onAdd}){
    const [form,setForm] = useState({title: '',amount:"",category:"Food",date:""});
    const [error,setError] = useState('');


    function handleChange(e){
        const {name,value} = e.target
        setForm((prev) => ({ ...prev, [name]: value }));    }
        
        function handleSubmit(e){
            e.preventDefault();
            const title = form.title.trim();
            const amount = Number(form.amount)
            if(!title) { setError('The Title is required');return;} 
            if(!amount || amount <=0) {setError('the Amount Must be >  0'); return;}
            if(!form.date) {setError('Date is Required'); return}
            setError('')
            onAdd({id: Date.now().toString(),title,amount,category: form.category,date: form.date})
            setForm({title: '',amount: '',category:'Food',date: '' })
        }


        return(
            <form onSubmit ={handleSubmit} style={{ border: '1px solid #333', padding: 16, borderRadius: 8, display: 'grid', gap: 8 }}>
                <input name="title" placeholder='Title' type='text' value={form.title} onChange={handleChange}/>
                <input name="amount" placeholder='Amount' type='number' value={form.amount} onChange={handleChange}/>
                <select name="category" value={form.category} onChange={handleChange}>
                      <option>Food</option>
        <option>Travel</option>
        <option>Study</option>
        <option>Other</option>
                </select>
                      <input name="date" type="date" value={form.date} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add</button>

            </form>
        )

    
    }

