import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link> | {" "}
            <Link to='/test'>Practice Now</Link>
        </nav>
    )
}

export default Navbar