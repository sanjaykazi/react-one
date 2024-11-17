
import './App.css'
import {useState, useMemo} from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  function expensiveTask(num){
    console.log('entered into expensive task');
    for(let i = 0; i <1000000000; i++){};
    return num*2
  }
  let  doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={handleClick}>Incremnt</button>
      <input 
        type='Number'
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>
        Double: {doubleValue}
      </p>
    </div>
    
  )
}

export default App
