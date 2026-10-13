import {useState} from 'react';


export default function ExpenseForm({addOn}){
    const [form,setForm] = useState({title: " ",amount:"",category:"Food",date:""});
    const [error,setError] = useState('');


    function handleChange(e){
        const {name,value} = e.target
        setForm((prev) => ({ ...prev, [name]: value }));    }

}

