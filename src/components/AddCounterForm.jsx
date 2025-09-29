export default function AddCounterForm({ onAction }) {  

    function addCounter(){
        onAction("name but better");
      }

    return(
        <button onClick={() => addCounter()}>add Counter</button>
    );
}