import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='nav-elements'>
                <ul>
                    <li>
                        <Link to={"/"}>LISTA</Link>
                    </li>
                    <li>
                        <Link to={"/equipo"}>EQUIPO</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar