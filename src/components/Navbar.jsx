import React from 'react'
import logo from "../picture/profile.png"

const Navbar = () => {
  return (
    <nav className='nav app-center'>
      <img src={logo} alt="Logo" width="60" />
      <ul>
        <li>me</li>
        <li>About me</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default Navbar