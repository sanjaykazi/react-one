
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // create state 
  // manage state 
  // change state 
  // sync state in childs
  const [name, setName] = useState('');
  return (
    <div>
      <Card title="card1" name={name} setName={setName}/>
      <p>
        Name variable inside parent: {name}
      </p>
      <Card title="card2" name={name} setName={setName}/>

      
    </div>
  )
}

export default App
