import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  //variation 1
  //runs on every render before rendering
  const [count, setCount] =useState(0);
  const [total, setTotal] =useState(1);
  // useEffect(() => {
  //   alert("alert on every render")
  // })
  function handleCount(){
    setCount(count+1);
  }
  function handleTotal(){
    setTotal(total+1);
  }

  //variation 2
  // that runs only on first render
  // useEffect(() => {
  //   alert("I will only run on first render")
  // }, [])

  //variation 3
  // runs only on change of dependency list variables
  // useEffect(() => {
  //   alert("i will run when count is changed")
  // }, [count])

  //variation 4
  // depends on multiple variables
  // useEffect(() => {
  //   alert("I will run when count/ total is changed")
  // }, [count, total])
  
  //variation 5
  // using clean-up function
  useEffect(() => {    
    alert('count is updated')
    return () => {
      alert("count is unmounted from UI")
    }
  }, [count])
  
  
  
  

  // first: side-effect function
  // second: clean-up function
  // third: comma separated dependencies list
  // useEffect( () => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <div>
      <button onClick={handleCount}>
        Click Me
      </button>
      <br/>
      Count: {count}
      <br/>
      <button onClick={handleTotal}>
        Click Me
      </button>
      <br/>
      Total: {total}
    </div>
  )
}

export default App
