import React from 'react'
import './Navbar.css'
import navlogo1 from '../../assets/nav-logo1.png'
import avataricon from '../../assets/avatar-icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo1} alt="" className="nav-logo1" />
        <img src={avataricon} className="avatar-icon" alt="" />
    </div>
  )
}

export default Navbar