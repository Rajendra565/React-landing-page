import React from 'react'
import Card from './Card'

function Work() {
  return (
    <>
    <div className="work flex items-center w-full text-center mt-5 flex-col">
        <div className=" w-full flex justify-center flex-col items-center text-white gap-5">
            <b className=' text-yellow-500 '>Work</b>
            <h1 className=' text-3xl capitalize'>How It Works</h1>
            <p className=' w-96'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati et sit aperiam eaque optio neque harum, explicabo voluptates impedit quibusdam?</p>
        </div>
        <div className=" flex flex-wrap justify-center items-center">
            <Card  heading="Pick meals" text="ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati et sit aperiam eaque optio neque harum," />
            <Card heading="Choose How Often" text="ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati et sit aperiam eaque optio neque harum," />
            <Card heading="Fast Deliveries" text="ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati et sit aperiam eaque optio neque harum," />
        </div>
    </div>
      
    </>
  )
}

export default Work
