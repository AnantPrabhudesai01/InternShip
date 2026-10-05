import {useState} from 'react';

export default function NameForm() {
    const [name,setName] = useState(' ');

    return(
        <div style = {{border: "1px solid #333, padding: 20,borderRadius: 8"}}>
        <h3>
            3.Name Form - String State
        </h3>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
        />
        <p>{name ? `Hello, ${name}!` : "Please enter your name."}</p>
        </div>
    )
}