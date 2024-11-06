import UserCard from "./components/UserCard"
import './App.css'
import sanjay from './assets/profile.jpeg'
import bhardwaj from './assets/bhardwaj.png'
import rohit from './assets/rohit.png'
function App() {

  return (
    <div className="container" >
      <UserCard name="Sanjay kazi" desc="description1" image = {sanjay} style = {{"border-radius" : "10px"}}/>
      <UserCard name = "Sumit Bharadwaj" desc="description2" image = {bhardwaj} style = {{"border-radius" : "10px"}}/>
      <UserCard name="Rohit Kumar" desc="description3" image = {rohit} style = {{"border-radius" : "10px"}}/>
    </div>
  )
}

export default App
