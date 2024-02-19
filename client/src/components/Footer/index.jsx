import React from 'react'
import './styles.css'
import logo from '../../assets/images/Logo.jpg'

function Footer() {
  return (
    <div className='footer'>
      <section >
        <img className='logo' src={logo} alt="" />
      </section>
      <section>
        <p>Trusted by</p>
      </section>
    </div>
  )
}

export default Footer