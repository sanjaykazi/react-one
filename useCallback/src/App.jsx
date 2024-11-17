import './App.css'
import { useCallback, useState } from 'react'
import Child from './components/Child'
function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
      setCount(count+1);
    },[count]);

  return (
    <div>
      <button onClick={handleClick}>
        count is {count}
      </button>
      <br/>
      <br/>
      <div>
        <Child 
        btnName="Click Me1"
        handleClick={handleClick}
        />
      </div>
    </div>
    
  )
}

export default App
