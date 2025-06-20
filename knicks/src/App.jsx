import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar1'
import Home from './pages/Home'
import Stats from './pages/Stats'
import Schedule from './pages/Schedule'
import Standings from './pages/Standings'

function App() {

  return (
    <div className='body'>
      <div className ="navbar">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/standings' element={<Standings/>}/>
            <Route path='/stats' element={<Stats/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
