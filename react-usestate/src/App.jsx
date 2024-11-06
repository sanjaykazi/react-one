import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Counter />
    </div>

  )
}

export default App
