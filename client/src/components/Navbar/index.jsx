import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink> | {" "}
            <NavLink to='/test'>Practice Now</NavLink> | {" "}
            <NavLink to='/login'>Login</NavLink>
        </nav>
    )
}

export default Navbar