import { useState } from 'react'
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
    <>
     <Route path = "/" element={<Home/>} />
     <Route path = "/projects" element={<Projects/>}  />
     <Route path = "/about" element={<About/>}  />
     <Route path = "/contact" element={<Contact/>}/>
     </>
  )
}

export default App
