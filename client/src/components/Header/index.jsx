import React from 'react'
import './styles.css'

function Header() {
  return (
    <div className='Header'>
      <section className='top-bar'>
        <img className='logo' src="/images/Logo.jpg" alt="" />
        <img className='banner' src="/images/Banner.jpg" alt="" />
      </section>
      <section className='top-nav'>
        <button className='homepage'>Mini IELTS</button>
        <button className='login'>Login</button>
      </section>
    </div>
  )
}

export default Header
