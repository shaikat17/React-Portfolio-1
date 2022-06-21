import React from 'react'

import Profile from './Profile'
import Footer from './Footer/Footer'
import './Home.css'

const Home = (props) => {
  return (
    <div className='home-container'>
        <Profile />
        <Footer />
    </div>
  )
}

export default Home