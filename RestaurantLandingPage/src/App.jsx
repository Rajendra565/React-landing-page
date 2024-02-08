import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Work from './component/Work/Work'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className=" App">
    <Navbar/>
    <div className=" mb-8">

    <Home/>
    <About/>
    <Work/>




    </div>
    </div>
    </>
  )
}

export default App
