import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log('Button clicked');
    setCount(count+1);
  }
  return (
    <div>
      <Button incrementCount={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
