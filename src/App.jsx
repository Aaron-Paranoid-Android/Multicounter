import { useState } from "react";
import CounterList from "./components/CounterList";
import Header from "./components/Header";
import AddCounterForm from "./components/AddCounterForm"



export default function App() {  
  const [counterList, setCounters] = useState([]); // list of counters

  function addCounter(dataFromChild){
    setCounters(counterList.concat(dataFromChild))
  }

  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
        <Header/>
        <AddCounterForm onAction={addCounter}/>
        <CounterList values={counterList}/>
    </div> 
  ); 
}