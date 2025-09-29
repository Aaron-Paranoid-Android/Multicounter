import { useState } from "react";
import CounterList from "./components/CounterList";
import Header from "./components/Header";
import AddCounterForm from "./components/AddCounterForm"



export default function App() {  
  const [counterList, setCounters] = useState([]); // list of counters

  function addCounter(){
    setCounters(counterList.concat(<Counter name="name but better"/>))
  }

  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
        <Header/>
        <AddCounterForm/>
        <CounterList/>
    </div> 
  ); 
}