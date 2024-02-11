import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Work from './component/Work/Work'
import Testimonial from './component/Testimonial'

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

    <Testimonial/>



    </div>
    </div>
    </>
  )
}

export default App
