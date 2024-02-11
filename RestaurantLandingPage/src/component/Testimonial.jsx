import React from 'react'
import { Avatar,Rating,Typography } from '@mui/material'

function Testimonial() {
  return (
    <>
    <div className=" flex flex-col justify-center items-center text-center my-4">
        <b>Testimonial</b>
        <div className=" w-96">
            <h1>What They Are Saying</h1>
            <p className=' '>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
            magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>
        <div className=" bg-white w-96 flex flex-col items-center py-8 my-4">
            <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2023/06/05/22/25/indian-man-8043472_1280.jpg" sx={{ width: 56, height: 56 }}/>
            
            <p className=' w-96 p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, illo ad soluta quis, dicta accusantium quisquam, eum placeat velit ipsum ipsam possimus?</p>
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={4} readOnly />
            <b>Rajendra Kumar</b>


        </div>
    
    </div>
      
    </>
  )
}

export default Testimonial
