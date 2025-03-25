import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './pages/projects'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">Contact</Link></li>
          <li><Link to="/projects">Contact</Link></li>

        </ul>
      </nav>
     <Routes>
     <Route path = "/home" element={<Home/>} />
     <Route path = "/projects" element={<Projects/>}  />
     <Route path = "/about" element={<About/>}  />
     <Route path = "/contact" element={<Contact/>}/>
     </Routes>
     </Router>
     
  )
}

export default App
