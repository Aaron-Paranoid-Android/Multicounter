import { useState } from "react";

export default function CounterCard({ name }) { 
  const [count, setCount] = useState(0); // state variable 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
        <h1>{name}</h1> 
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button> 
        <button onClick={() => setCount(count - 1)}>Decrement</button> 
        <button onClick={() => setCount(0)}>Reset</button>
        {count < 0 && <p style={{ color: "red" }}>Careful! Negative count!</p>}
    </div> 
  ); 
} 