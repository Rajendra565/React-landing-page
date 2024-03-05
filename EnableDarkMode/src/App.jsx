import react, { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Date from './component/Date'

function App() {
  const [bgcolor, setBgcolor] = useState('light')


  const enableDark=()=>{
    

      if(bgcolor ==='light'){
        setBgcolor("dark")
      }
      else{
        setBgcolor("light")
      }
   

  }

  return (
    <>

      <Navbar bgc={bgcolor} onevent={enableDark}/>   
      
      <div className= {`d-flex flex-wrap justify-content-center gap-2 mt-1 min-h-screen bg-${bgcolor} `}>   
      {Date.map((val)=>{
        return(

      <Home image={val.image} title={val.title} key={val.id} bgc={bgcolor}/>
        )
      })}




      

      </div>
    
    </>
  )
}

export default App
