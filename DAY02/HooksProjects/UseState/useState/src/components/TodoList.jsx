import {useState} from 'react';

export default function ToDoList(){
    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');


    function addTodo(){
        const text = input.trim()
        if(!text) return;
        setTodos((prev)=>[...prev,text]);
        setInput('');
    }

    return(
        <div style={{border: "1px solid #333", padding: 20, borderRadius: 8}}>
            <h3>4.ToDo List</h3>
            <input 
                type="text" 
                value={inputValue} 
                                placeholder="Enter a new task"

                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={(e)=>{
                    if(e.key === 'Enter') 
                        addTodo();
                }}
            />{ }
            <button onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}