import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  

  const addValue = () => {
    console.group("clicked",Math.random());
    setCounter(Math.min(counter + 1,20))
  }
  const removeValue = () => {
    console.group("clicked",Math.random());
    setCounter(Math.max(counter - 1,0))
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
