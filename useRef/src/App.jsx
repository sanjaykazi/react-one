
import './App.css'
import {useState, useRef} from 'react'
function App() {
  let btnRef =useRef();
  let val = 0;
  const ting = useRef(0);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  function handleClick(){
    val += 1;
    ting.current += 1;
    console.log("Value of val",val);
    console.log("Ting value on each render:", ting.current)
    setCount(count+1);
  }
  function changeColor(){
    btnRef.current.style.backgroundColor = 'red';
  }
  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handleClick}>
        Click Me
      </button>
      <br/>
      <br/>
      <button onClick={changeColor}>
        Change color of 1st button
      </button>
      <p>{count}</p>
      <hr></hr>
      <div>
        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>
          Start Timer
        </button>
        <button onClick={stopTimer}>
          Stop Timer
        </button>
        <button onClick={resetTimer}>
          Reset Timer
        </button>
      </div>

    </div>
  )
}

export default App
