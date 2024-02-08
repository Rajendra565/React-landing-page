// eslint-disable-next-line no-unused-vars
import React from 'react'
import  Logo from "../assets/restaurant1.webp"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Home() {
  return (
    <>
    <div className=" flex justify-evenly items-center sm:flex-col xl:flex-row xl:justify-around">
        <div className=" my-16 flex flex-col gap-4 text-center sm:w-96 items-center ">
            <h1 className=' font-bold text-white text-4xl  sm:w-96'>Your favourite food Delivered Hot & Fresh</h1>
            <p className=' text-white mb-4'>Healthy Switcher chefs do all the prep work ,Like Peeding, Chopping & Marination, So you can Cook a Fresh Food</p>
            <button className=' bg-yellow-500 w-fit p-3 rounded-full hover:bg-slate-600 hover:text-white capitalize'>Order Now <ArrowRightAltIcon/></button>
        </div>
        <div className="">
            <img src={Logo} alt="" width='630px'  className=' rounded-3xl sm:w-96' />
        </div>
    </div>
      
    </>
  )
}

export default Home
