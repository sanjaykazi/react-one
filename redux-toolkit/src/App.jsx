
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleIncrementAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrement}> + </button>
      <p>Count: {count} </p>
      <button onClick={handleDecrement}> - </button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br/>
      <br/>
      <input
        type='Number'
        value={amount}
        placeholder='Enter the amount'
        onChange={(e) => setAmount(e.target.value)} 
       />
       <br />
      <br />
      <button onClick={handleIncrementAmount}>Incremnt by amount</button>
    </div>
  )
}

export default App
