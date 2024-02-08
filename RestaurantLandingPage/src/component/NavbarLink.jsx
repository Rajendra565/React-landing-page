import React from 'react'

function NavbarLink(props) {
  return (
    <div>
      {/*  eslint-disable-next-line react/prop-types */}
      <li><a href="" className=' capitalize hover:text-white'>{props.link}</a></li>
    </div>
  )
}

export default NavbarLink
