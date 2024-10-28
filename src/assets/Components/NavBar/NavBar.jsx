import React from 'react'
import CartWidget from '../CartWidget'
import Logo from "../../../img/logo.png"
import "./navbar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
      
            <ul>
                <li><Link className='link-nav' to="/categoria/Campera">Camperas</Link></li>
                <li><Link className='link-nav' to="/categoria/Pantalon">Pantalones</Link></li>
                <li><Link className='link-nav' to="/categoria/Remeras">Remeras</Link></li>
            </ul>

            <CartWidget />
    </nav>
  )
}

export default NavBar