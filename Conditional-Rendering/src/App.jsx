
import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
    // 1. if-else condition 
    // if(isLoggedIn){
    //   return (
    //     <LogoutBtn />
    //   )
    // }else{
    //     return (
    //       <LoginBtn />
    //     )
    // }
    // 2. ternary operator
    // return(
    //   <div>
    //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    //   </div>
    // )
    // 3. logical operator
    // return (
    //   <div>
    //     <h1>
    //       hello to my learning journey
    //     </h1>
    //     <div>
    //       {isLoggedIn && <LogoutBtn />}
    //     </div>
    //   </div>
    // )
    // 4. early return 
    if(!isLoggedIn){
      return (
        <div>
          <p> You need to login first:</p>
          <LoginBtn />
        </div> 
      )
    }
    return (
      <div>
        <h1>
          hello to my learning journey
        </h1>
        <div>
          {isLoggedIn && <LogoutBtn />}
        </div>
      </div>
    )
  
}

export default App
