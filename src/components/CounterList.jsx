import { useState } from "react";
import CounterCard from "./CounterCard";



export default function CounterList() {  
  const [counterList, setCounters] = useState([]); // list of counters

  function addCounter(){
    setCounters(counterList.concat(<CounterCard name="name but better"/>))
  }

  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}>
      {counterList}
      {(counterList.length == 0) && <p style={{ color: "red" }}>List empty womp womp</p>}
    </div>
  ); 
}