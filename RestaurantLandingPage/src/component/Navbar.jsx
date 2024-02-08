import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarLink from './NavbarLink'


function Navbar() {
  return (
    <div>
      <nav className=' my-4 flex justify-between items-center'>
        <div className="logo">
            <b className='text-amber-400 text-2xl'>Foodie</b>
        </div>
        <ol className=' flex gap-3 font-semibold items-center'>
        <NavbarLink link="Home"/>
        <NavbarLink link="About"/>
        <NavbarLink link="Testimonials"/>
        <NavbarLink link="contact"/>   
        </ol>
        <div className=" flex items-center justify-between gap-4">
            <button className=' bg-amber-400 p-3 rounded-3xl hover:bg-zinc-600 hover:text-yellow-400'>Booking Now</button>
        <a href="#">
            <ShoppingCartIcon/>
            </a>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
