import { useState } from "react";

export default function AddCounterForm() {  
    const [count, setCounters] = useState([]); // state variable 

    function addCounter(){
        setCounters(counterList.concat(<CounterCard name="name but better"/>))
      }

    return(<button onClick={() => addCounter()}>add Counter</button>);
}