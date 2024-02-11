import React from 'react'

function Card(props) {
  return (
    <>
    <div className="card bg-white my-3 p-4 mx-2 w-fit h-fit mt-7">
        <div className=" flex flex-col gap-4 mt-6  w-full">
        <i className="fa-solid fa-utensils text-yellow-600 fa-2xl"></i>
        <b>{props.heading}</b>
        <p className=' w-96 text-center'>{props.text}</p>

        </div>

    </div>
      
    </>
  )
}

export default Card
