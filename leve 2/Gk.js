import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0);
    
    return(
        <div style={{textAlign: "center",marginTop:"50px"}}>
            <h1>Counter</h1>
            <p style={{fontSize:"2rem",fontWeight:"bold"}}>{count}</p>
            <button className="bg-success rounded" onClick={() => setCount(count +1)} style={{marginRight:"10px",padding:"10px"}}>Increment</button>
            <button className="bg-danger rounded" onClick={() => setCount(count-1)} style={{marginRight:"10px", padding:"10px"}}>Decrement</button>
        </div>
    )
}