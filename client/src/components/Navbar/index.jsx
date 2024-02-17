import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink> | {" "}
            <NavLink to='/test'>Practice Now</NavLink>
        </nav>
    )
}

export default Navbar