import React from 'react'
import RecentTest from './components/RecentTest/index'
import IeltsTip from './components/IeltsTips/index'
import Hero from './components/Hero/index'

function Homepage() {
  return (
    <div>
      <Hero />
      <IeltsTip />
      <RecentTest />
    </div>
  )
}

export default Homepage