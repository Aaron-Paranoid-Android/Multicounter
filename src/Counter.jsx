import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter() { 
  const [count, setCount] = useState(0); // state variable 
 
  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
        <h1>Name</h1> 
        <CounterDisplay count={count} /> 
        <button onClick={() => setCount(count + 1)}>Increment</button> 
        <button onClick={() => setCount(count - 1)}>Decrement</button> 
        <button onClick={() => setCount(0)}>Reset</button>
        {count < 0 && <p style={{ color: "red" }}>Careful! Negative count!</p>}
    </div> 
  ); 
} 