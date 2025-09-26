import { useState } from "react";
import Counter from "./Counter";



export default function App() { 
  const [counterList, setCounters] = useState([]); // list of counters

  function addCounter(){
    setCounters(counterList.concat(<Counter/>))
  }

  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
        <h1>My First React Counterssssss</h1> 
        <button onClick={() => addCounter()}>add Counter</button> 
        {counterList}
    </div> 
  ); 
}