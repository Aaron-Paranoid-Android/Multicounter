import { useState } from "react";
import CounterCard from "./CounterCard";



export default function CounterList({ values }) {  
  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}>
      {values.map((name) => (<CounterCard name={name}/>))}
      {(values.length == 0) && <p style={{ color: "red" }}>List empty womp womp</p>}
    </div>
  ); 
}