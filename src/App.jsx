import ChangeColor from "./components/ChangeColor"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  
  return (
    <div className="App">
      <Profile/>
        <hr style={{color:'black',margin:'20px 0'}}/>
      <Login />
        <hr style={{color:'black',margin:'20px 0'}}/>
      <ChangeColor />
    </div>
  )
}

export default App
