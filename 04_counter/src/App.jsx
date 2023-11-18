


import { useState } from "react";
import './App.css'

function App() {

 let [counter , setCounter] = useState(5)

  //let counter = 5  // NO NEED BECUZ above line of code doing it behind the sence

  const addValue = () =>{
    //console.log("Clicked" , Math.random());  
    //counter++
    let counterAdd = ++counter // counter++ problamatic line BECUZ The delay in the update of the counter value in the UI is likely caused by the way you are using setCounter and the post-increment (counter++) operation.    
    if (counterAdd >= 100) {
      setCounter(100)
    } else {
      setCounter(counterAdd)
    }
  }

  const removeValue = ()=> {
    let counterRemove = --counter
    if (counterRemove <= 0) {
      setCounter(0)
    } else {
      setCounter(counterRemove)
    }
    //console.log(counter);
  }
  return (
    <>
      <h1>REACT</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value: {counter}</button>
      <p>paragraph: {counter}</p>

    </>
  )
}

export default App
