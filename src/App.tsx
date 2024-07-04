import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
    </>
  )
}

export default App
