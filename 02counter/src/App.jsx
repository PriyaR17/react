import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(0)
  //let counter=5
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1
    setcounter(counter)
    }

  const removeValue=()=>{
    setcounter(counter-1)
  }  

  return (
    <>
      <h1>React.js Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App