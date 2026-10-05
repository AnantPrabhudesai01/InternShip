import {useState} from 'react';

export default function Toggle(){
    const [show,setShow] = useState(false);
    return(
        <div style={{border: "1px solid #333", padding: 20, borderRadius: 8}}>
            <h3>2. Toggle -boolean state</h3>
            <button type="button" onClick={() => setShow((s) => !s)}>
                {show ? "Hide" : "Show"}Text
            </button>
            {show && <p>Hello! I am visible </p>}
        </div>
    )
}