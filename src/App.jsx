import './App.css'
import Home from './screens/Home'
import Cachorros from './screens/Cachorros'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
  <Router>
  <Routes> 

  <Route 
  path="/" 
  element={<Home/>}/>

<Route 
  path="/buscar-caes" 
  element={<Cachorros/>}/>

  </Routes>
  </Router>
    </>
  )
}

export default App