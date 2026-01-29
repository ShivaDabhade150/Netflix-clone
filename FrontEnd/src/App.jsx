import { Home } from './Page/Home/Home.jsx'
import {Routes,Route,Link} from "react-router-dom"
import {Login} from "./Page/Login/Login.jsx"
import {Player} from "./Page/Player/Player.jsx"

function App() {
  

  return (
     <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/Player/:id" element={<Player/>}/>
      </Routes>
      
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
     </>
  )
}

export default App
