import React from 'react'
import './styles.css'
import logo from '../../assets/images/Logo.jpg'
import banner from '../../assets/images/Banner.jpg'

function Header() {
  return (
    <div className='Header'>
      <section className='top-bar'>
        <img className='logo' src={logo} alt="" />
        <img className='banner' src={banner} alt="" />
      </section>
    </div>
  )
}

export default Header
