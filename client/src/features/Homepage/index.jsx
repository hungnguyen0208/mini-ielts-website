import React from 'react'
import RecentTest from './components/RecentTest/index'
import IeltsTip from './components/IeltsTips/index'
import Hero from './components/Hero/index'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

function Homepage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <IeltsTip/>
        <RecentTest/>
        <Footer/>
    </div>
  )
}

export default Homepage