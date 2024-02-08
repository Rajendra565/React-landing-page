/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../assets/restaurant2.avif';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function About() {
  return (
    <>
    <div className=" flex justify-center items-center flex-row-reverse sm:flex-col xl:flex-row xl:justify-around xl:flex-row-reverse ">
        <div className=" my-16 flex flex-col gap-4 sm:w-96 items-center ">
        <b className=' text-yellow-500 w-fit'>About</b>
            <h1 className=' font-bold text-white text-4xl  sm:w-96 capitalize'>
                Food is an important part of a Balnced Diet
            </h1>
            <p className=' text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae soluta perferendis eaque enim, rem quisquam nulla similique debitis temporibus illum praesentium. Expedita id porro iste pariatur in minima reprehenderit?<br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, aliquid!</p>
            <div className=" flex items-center justify-between gap-4">
             <button className=' bg-yellow-500 w-fit p-3 rounded-full hover:bg-slate-600 hover:text-white capitalize'>Learn More</button>
             <div className=" flex gap-3">

             <PlayCircleIcon className=' text-2xl'/>
             <a href="#" className=' '>Watch Video</a>

             </div>
            
            </div>
        </div>
        <div className="">
            <img src={Logo} alt="" width='630px'  className=' rounded-3xl sm:w-96 xl:w-96' />
        </div>
    </div>
      
    </>
  )
}

export default About
