import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { useState } from 'react';
// 1. create context
// 2. privde context
// 3. use context
// it helps avoiding prop drilling.
//step: 1 create context
// const UserContext = createContext();
const ThemeContext = createContext();
function App() {
  // step: 3 pass value 
  // step: 4 consume inside the consumer
  // const [user, setUser] = useState({name:"sanjay"})
  const [theme, setTheme] = useState('light');
  function handleClick() {

  }
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'orange'}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
    // <div>
    //   {/* step: 2 wrap all the child inside the provider */}
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </div>
  )
}
export default App
// step: 5 exporting is required
export { ThemeContext }
